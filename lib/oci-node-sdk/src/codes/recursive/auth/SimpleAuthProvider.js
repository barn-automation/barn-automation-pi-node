const AbstractAuthProvider = require('./AbstractAuthProvider.js');
/**
 * Provide authentication via string credentials
 * @param {string} tenancyId the tenancy OCID
 * @param {string} userId the user OCID
 * @param {string} keyFingerprint the fingerprint for the private key
 * @param {string} [privateKey] a string representation of the private key
 * @param {string} [privateKeyPath] the path to the private key (if privateKey not provided, pass the path to it.  takes precedence over privateKey)
 * @param {string} [privateKeyPassphrase=null] the passphrase used to decrypt the private key
 * @class SimpleAuthProvider
 * @extends AbstractAuthProvider
 */
class SimpleAuthProvider extends AbstractAuthProvider {
    constructor(tenancyId, userId, keyFingerprint, privateKey, privateKeyPath, privateKeyPassphrase=null) {
        if( typeof privateKey === 'undefined' && typeof privateKeyPath === 'undefined' ) {
            throw new Error('You must provide either a privateKey or a privateKeyPath');
        }
        super();
        this.tenancyId = tenancyId;
        this.userId = userId;
        this.keyFingerprint = keyFingerprint;
        this.privateKey = privateKey;
        this.privateKeyPath = privateKeyPath;
        this.privateKeyPassphrase = privateKeyPassphrase;
    }
};

module.exports = SimpleAuthProvider;
