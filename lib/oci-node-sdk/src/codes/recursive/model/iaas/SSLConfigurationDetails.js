/**
* The load balancer's SSL handling configuration details.
* @param {string} certificateName Minimum: 1 Maximum: 255 A friendly name for the certificate bundle. It must be unique and it cannot be changed. Valid certificate bundle names include only alphanumeric characters, dashes, and underscores. Certificate bundle names cannot contain spaces. Avoid entering confidential information. Example: example_certificate_bundle
* @param {boolean} [verifyPeerCertificate] Whether the load balancer listener should verify peer certificates. Example: true
* @param {number} [verifyDepth] The maximum depth for peer certificate chain verification. Example: 3
* @class SSLConfigurationDetails
*/
class SSLConfigurationDetails {
	constructor(certificateName, verifyPeerCertificate, verifyDepth){
		this.certificateName = certificateName;
		this.verifyPeerCertificate = verifyPeerCertificate;
		this.verifyDepth = verifyDepth;
	}
}

module.exports = SSLConfigurationDetails;
