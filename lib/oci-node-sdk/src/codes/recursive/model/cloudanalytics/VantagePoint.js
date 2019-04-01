/**
* 
* @param {string} [address] IP address of this network node.
* @param {Geolocation} [geo] The geographical location of this vantage point. Will be null if unknown or unavailable. Only present if fields includes geo.
* @param {string} [label] The name of the organization associated with this IP address. Only present if fields parameter includes labels. Will be null if label is unknown.
* @param {string} [rdns] The name returned by a reverse DNS query on an IP address from the current OCI Availability Domain. DNS lookups are not performed from vantage points. Only present if fields parameter includes rdns. Will be null if the IP address does not reverse-resolve. If an address reverse-resolves to multiple hostnames, one will be arbitrarily selected.
* @param {Array<Routing>} [routing] An array of objects that describe how an address is routed, including what prefixes and ASNs connect it to the rest of the Internet. The addresses are sorted from the most-specific to least-specific prefix (the smallest network to largest network). When a prefix has multiple origin ASNs (MOAS routing), they are sorted by weight (highest to lowest). Weight is determined by the total percentage of peers observing the prefix originating from an ASN. Only present if fields includes routing. The field will be null if the address's routing information is unknown.
* @param {string} [displayName] A human-readable description of this vantage point suitable for user interfaces. Each vantage point''s display name is unique, but is not guaranteed to be stable.
* @param {string} [providerName] The organization on whose infrastructure this vantage point resides. Provider names are not unique, as OCI maintains many vantage points on each major provider.
* @class VantagePoint
*/
class VantagePoint {
	constructor(address, geo, label, rdns, routing, displayName, providerName){
		this.address = address;
		this.geo = geo;
		this.label = label;
		this.rdns = rdns;
		this.routing = routing;
		this.displayName = displayName;
		this.providerName = providerName;
	}
}

module.exports = VantagePoint;
