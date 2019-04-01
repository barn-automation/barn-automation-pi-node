/**
* The data used to create a new SSL certificate.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment in which to create the SSL certificate.
* @param {string} certificateData The data of the SSL certificate.
* @param {string} privateKeyData The private key of the SSL certificate.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the SSL certificate. The name can be changed and does not need to be unique.
* @param {boolean} [isTrustVerificationDisabled] Set to true if the SSL certificate is self-signed.
* @param {Object} [freeformTags] A simple key-value pair without any defined schema.
* @param {Object} [definedTags] A key-value pair with a defined schema that restricts the values of tags. These predefined keys are scoped to namespaces.
* @class CreateCertificateDetails
*/
class CreateCertificateDetails {
	constructor(compartmentId, certificateData, privateKeyData, displayName, isTrustVerificationDisabled, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.certificateData = certificateData;
		this.privateKeyData = privateKeyData;
		this.displayName = displayName;
		this.isTrustVerificationDisabled = isTrustVerificationDisabled;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateCertificateDetails;
