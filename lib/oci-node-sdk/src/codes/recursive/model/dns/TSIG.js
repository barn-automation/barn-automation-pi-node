/**
* A TSIG key.
* @param {string} name Minimum: 1 Maximum: 254 A domain name identifying the key for a given pair of hosts.
* @param {string} secret Minimum: 1 Maximum: A base64 string encoding the binary shared secret.
* @param {string} algorithm Minimum: 1 Maximum: 254 TSIG Algorithms are encoded as domain names, but most consist of only one non-empty label, which is not required to be explicitly absolute. Applicable algorithms include: hmac-sha1, hmac-sha224, hmac-sha256, hmac-sha512. For more information on these algorithms, see {@link https://tools.ietf.org/html/rfc4635#section-2|RFC 4635}.
* @class TSIG
*/
class TSIG {
	constructor(name, secret, algorithm){
		this.name = name;
		this.secret = secret;
		this.algorithm = algorithm;
	}
}

module.exports = TSIG;
