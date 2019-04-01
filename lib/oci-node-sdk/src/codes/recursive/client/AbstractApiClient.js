const fs = require('fs');
const os = require('os');
const httpSignature = require('http-signature');
const jsSHA = require("jssha");
const sshpk = require("sshpk");
const ApiResponse = require('../model/ApiResponse.js');
const crypto = require('crypto');

/**
 * A base class for API clients<br/>
 * <h4>Subclasses:</h4>
 * <ul>
 *
 *
 *     <li>{@link AnnouncementClient}</li>
 *     <li>{@link AuditClient}</li>
 *     <li>{@link AutoScalingClient}</li>
 *     <li>{@link ContainerEngineClient}</li>
 *     <li>{@link CoreClient}</li>
 *     <li>{@link DatabaseClient}</li>
 *     <li>{@link DNSClient}</li>
 *     <li>{@link EmailDeliveryClient}</li>
 *     <li>{@link FileStorageClient}</li>
 *     <li>{@link HealthCheckClient}</li>
 *     <li>{@link IAMClient}</li>
 *     <li>{@link KeyManagementClient}</li>
 *     <li>{@link LoadBalancingClient}</li>
 *     <li>{@link MonitoringClient}</li>
 *     <li>{@link NotificationClient}</li>
 *     <li>{@link ObjectStorageClient}</li>
 *     <li>{@link CloudServiceClient}</li>
 *     <li>{@link ResourceManagerClient}</li>
 *     <li>{@link SearchClient}</li>
 *     <li>{@link StreamingClient}</li>
 *     <li>{@link WAASClient}</li>
 * </ul>
 * @abstract
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class AbstractApiClient
 */
class AbstractApiClient {

    constructor(authProvider, region) {
        this.validRegions = ['ca-toronto-1', 'eu-frankfurt-1', 'uk-london-1', 'us-ashburn-1', 'us-phoenix-1'];
        this.validMethods = ['GET', 'POST', 'PUT', 'PATCH', 'HEAD', 'DELETE'];
        this.apiVersions = [
            '20160918'
        ]; // in desc order, latest version always first
        this.authProvider = authProvider;
        this.apiVersion = this.apiVersions[0];
        if( this.validRegions.indexOf( region.toLowerCase() ) == -1 ) {
            throw new Error(`Region must be one of: ${this.validRegions.join(',')}`);
        }
        else {
            this.region = region.trim().toLowerCase();
        }
        this.querystring = require('querystring');
        this.Utils = require('../util/Utils.js');
    }

    signRequest(request, options) {
        let privateKey;
        let privateKeyPath;

        if( this.authProvider.hasOwnProperty('privateKeyPath') && this.authProvider.privateKeyPath != null && typeof this.authProvider.privateKeyPath !== 'undefined' ) {
            privateKeyPath = this.authProvider.privateKeyPath;
            if( privateKeyPath.indexOf("~/") === 0 ) {
                privateKeyPath = privateKeyPath.replace("~", os.homedir())
            }
            privateKey = fs.readFileSync(privateKeyPath, 'ascii');
        }
        else {
            privateKey = this.authProvider.privateKey.trim();
        }

        let apiKeyId = `${this.authProvider.tenancyId}/${this.authProvider.userId}/${this.authProvider.keyFingerprint}`;

        let headersToSign = [
            "host",
            "date",
            "(request-target)"
        ];

        let methodsThatRequireExtraHeaders = ["POST", "PUT"];
        if(methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) !== -1) {
            options.body = options.body || "";
            if( Buffer.isBuffer(options.body) ) {
                var hash = crypto.createHash('sha256').update(options.body).digest('base64');
                request.setHeader("x-content-sha256", hash);
            }
            else {
                var shaObj = new jsSHA("SHA-256", "TEXT");
                shaObj.update(options.body);
                request.setHeader("x-content-sha256", shaObj.getHash('B64'));
            }

            if( !options.headers.hasOwnProperty('content-length') ) request.setHeader("content-length", options.body.length);

            headersToSign = headersToSign.concat([
                "content-type",
                "content-length",
                "x-content-sha256"
            ]);
        }
        const opts = {
            key: privateKey,
            keyId: apiKeyId,
            headers: headersToSign,
            passphrase: this.authProvider.privateKeyPassphrase,
        };
        if( this.authProvider.hasOwnProperty('privateKeyPassphrase') && this.authProvider.privateKeyPassphrase && ( privateKeyPath || privateKey ) ) {
            // manually decrypt the key using sshpk to bypass the bug in http-signature (doesn't pass passphrase)
            opts.key = sshpk.parsePrivateKey(privateKey, 'auto', { passphrase: this.authProvider.privateKeyPassphrase });
        }
        httpSignature.sign(request, opts);

        let newAuthHeaderValue = request.getHeader("Authorization").replace("Signature ", "Signature version=\"1\",");
        request.setHeader("Authorization", newAuthHeaderValue);
    }

    doRequest(url, method, options={ headers: {} }, requestBody="") {
        if( this.validMethods.indexOf(method.toUpperCase()) == -1 ) {
            throw new Error(`Method must be one of: ${this.validMethods.join(',')}`);
        }

        if( ['POST', 'PUT' ].indexOf(method.toUpperCase()) > -1 ) {
            if( !options.headers.hasOwnProperty('content-type') ) options.headers['content-type'] = 'application/json';
        }
        options.method = method;
        options.headers['x-sdk'] = 'oci-node-sdk';
        return new Promise((resolve, reject) => {
            const lib = url.startsWith('https') ? require('https') : require('http');
            const request = lib.request(url, options, (response) => {
                const body = [];
                response.setEncoding('binary')
                response.on('data', (chunk) => body.push(chunk));
                response.on('end', () => {
                    const result = body.join('');
                    const apiResponse = new ApiResponse(response.statusCode, response.headers);
                    if( result.length ) {
                        try {
                            apiResponse.body = JSON.parse(result);
                        }
                        catch(e) {
                            // can't parse JSON, return raw
                            apiResponse.body = result;
                        }
                    }
                    resolve(apiResponse);
                });
            });
            this.signRequest(request, Object.assign(options, {body: requestBody}));
            request.on('error', (err) => reject(err));
            request.end(requestBody);
        });
    }
};

module.exports = AbstractApiClient;
