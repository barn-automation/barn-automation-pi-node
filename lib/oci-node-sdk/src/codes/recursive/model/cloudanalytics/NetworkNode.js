/**
* A single network node (host or router) seen in a traceroute result.
* @param {string} [address] IP address of this network node.
* @param {Geolocation} [geo] The geographical location of this vantage point. Will be null if unknown or unavailable. Only present if fields includes geo.
* @param {string} [label] The name of the organization associated with this IP address. Only present if fields parameter includes labels. Will be null if label is unknown.
* @param {string} [rdns] The name returned by a reverse DNS query on an IP address from the current OCI Availability Domain. DNS lookups are not performed from vantage points. Only present if fields parameter includes rdns. Will be null if the IP address does not reverse-resolve. If an address reverse-resolves to multiple hostnames, one will be arbitrarily selected.
* @param {Array<Routing>} [routing] An array of objects that describe how an address is routed, including what prefixes and ASNs connect it to the rest of the Internet. The addresses are sorted from the most-specific to least-specific prefix (the smallest network to largest network). When a prefix has multiple origin ASNs (MOAS routing), they are sorted by weight (highest to lowest). Weight is determined by the total percentage of peers observing the prefix originating from an ASN. Only present if fields includes routing. The field will be null if the address's routing information is unknown.
* @class NetworkNode
*/
class NetworkNode {
	constructor(address, geo, label, rdns, routing){
		this.address = address;
		this.geo = geo;
		this.label = label;
		this.rdns = rdns;
		this.routing = routing;
	}
}

module.exports = NetworkNode;
