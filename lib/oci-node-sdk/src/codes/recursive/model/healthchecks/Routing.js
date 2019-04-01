/**
* The routing information for a vantage point.
* @param {string} [asLabel] The registry label for asn, usually the name of the organization that owns the ASN. May be omitted or null.
* @param {number} [asn] The Autonomous System Number (ASN) identifying the organization responsible for routing packets to prefix.
* @param {string} [prefix] An IP prefix (CIDR syntax) that is less specific than address, through which address is routed.
* @param {number} [weight] An integer between 0 and 100 used to select between multiple origin ASNs when routing to prefix. Most prefixes have exactly one origin ASN, in which case weight will be 100.
* @class Routing
*/
class Routing {
	constructor(asLabel, asn, prefix, weight){
		this.asLabel = asLabel;
		this.asn = asn;
		this.prefix = prefix;
		this.weight = weight;
	}
}

module.exports = Routing;
