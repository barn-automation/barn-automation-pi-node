/**
* 
* @param {string} key The public key. Must be an RSA key in PEM format.
* @class CreateApiKeyDetails
*/
class CreateApiKeyDetails {
	constructor(key){
		this.key = key;
	}
}

module.exports = CreateApiKeyDetails;
