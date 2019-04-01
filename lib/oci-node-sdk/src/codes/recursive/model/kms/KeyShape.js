/**
* The cryptographic properties of a key.
* @param {string} algorithm The algorithm used by a key's KeyVersions to encrypt or decrypt. Allowed values are: AES
* @param {number} length The length of the key, expressed as an integer. Values of 16, 24, or 32 are supported.
* @class KeyShape
*/
class KeyShape {
	constructor(algorithm, length){
		this.algorithm = algorithm;
		this.length = length;
	}
}

module.exports = KeyShape;
