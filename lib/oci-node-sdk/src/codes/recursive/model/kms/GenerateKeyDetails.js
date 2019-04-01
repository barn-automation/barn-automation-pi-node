/**
* 
* @param {boolean} includePlaintextKey If true, the generated key is also returned unencrypted.
* @param {string} keyId Minimum: 1 Maximum: 255 The OCID of the master encryption key to encrypt the generated data encryption key with.
* @param {KeyShape} keyShape 
* @param {Object} [associatedData] Information that can be used to provide an encryption context for the encrypted data. The length of the string representation of the associatedData must be fewer than 4096 characters.
* @param {Object} [loggingContext] Information that can be used to provide context for audit logging. It is a map that contains any addtional data the users may have and will be added to the audit logs (if audit logging is enabled)
* @class GenerateKeyDetails
*/
class GenerateKeyDetails {
	constructor(includePlaintextKey, keyId, keyShape, associatedData, loggingContext){
		this.includePlaintextKey = includePlaintextKey;
		this.keyId = keyId;
		this.keyShape = keyShape;
		this.associatedData = associatedData;
		this.loggingContext = loggingContext;
	}
}

module.exports = GenerateKeyDetails;
