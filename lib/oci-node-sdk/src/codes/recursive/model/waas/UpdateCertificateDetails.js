/**
* The data used to create a new SSL certificate.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the SSL certificate. The name can be changed and does not need to be unique.
* @param {Object} [freeformTags] A simple key-value pair without any defined schema.
* @param {Object} [definedTags] A key-value pair with a defined schema that restricts the values of tags. These predefined keys are scoped to namespaces.
* @class UpdateCertificateDetails
*/
class UpdateCertificateDetails {
	constructor(displayName, freeformTags, definedTags){
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateCertificateDetails;
