/**
* 
* @param {string} ciphertext Minimum: 1 Maximum: 65536 The encrypted data to decrypt.
* @param {string} keyId Minimum: 1 Maximum: 255 The OCID of the key used to encrypt the ciphertext.
* @param {Object} [associatedData] Information that can be used to provide an encryption context for the encrypted data. The length of the string representation of the associatedData must be fewer than 4096 characters.
* @param {Object} [loggingContext] Information that can be used to provide context for audit logging. It is a map that contains any addtional data the users may have and will be added to the audit logs (if audit logging is enabled)
* @class DecryptDataDetails
*/
class DecryptDataDetails {
	constructor(ciphertext, keyId, associatedData, loggingContext){
		this.ciphertext = ciphertext;
		this.keyId = keyId;
		this.associatedData = associatedData;
		this.loggingContext = loggingContext;
	}
}

module.exports = DecryptDataDetails;
