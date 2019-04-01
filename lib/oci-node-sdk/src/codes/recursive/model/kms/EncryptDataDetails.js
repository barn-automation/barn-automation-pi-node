/**
* 
* @param {string} keyId Minimum: 1 Maximum: 255 The OCID of the key to encrypt with.
* @param {string} plaintext Minimum: 1 Maximum: 4096 The plaintext data to encrypt.
* @param {Object} [associatedData] Information that can be used to provide an encryption context for the encrypted data. The length of the string representation of the associatedData must be fewer than 4096 characters.
* @param {Object} [loggingContext] Information that can be used to provide context for audit logging. It is a map that contains any addtional data the users may have and will be added to the audit logs (if audit logging is enabled)
* @class EncryptDataDetails
*/
class EncryptDataDetails {
	constructor(keyId, plaintext, associatedData, loggingContext){
		this.keyId = keyId;
		this.plaintext = plaintext;
		this.associatedData = associatedData;
		this.loggingContext = loggingContext;
	}
}

module.exports = EncryptDataDetails;
