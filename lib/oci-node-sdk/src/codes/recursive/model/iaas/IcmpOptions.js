/**
* Optional object to specify a particular ICMP type and code. If you specify ICMP as the protocol but do not provide this object, then all ICMP types and codes are allowed. If you do provide this object, the type is required and the code is optional. See ICMP Parameters for allowed values. To enable MTU negotiation for ingress internet traffic, make sure to allow type 3 ("Destination Unreachable") code 4 ("Fragmentation Needed and Don't Fragment was Set"). If you need to specify multiple codes for a single type, create a separate security list rule for each.
* @param {number} type The ICMP type.
* @param {number} [code] The ICMP code (optional).
* @class IcmpOptions
*/
class IcmpOptions {
	constructor(type, code){
		this.type = type;
		this.code = code;
	}
}

module.exports = IcmpOptions;
