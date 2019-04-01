/**
* A single network node (IP address) seen along the path between the source and the target. Unresponsive hops are still included, but with all fields set to null.
* @param {Array<integer>} [mplsLabels] The Multiprotocol Label Switching (MPLS) tunnels traversed by this hop. The array is returned empty if none are found.
* @param {NetworkNode} [node] The host or router (single IP address) seen on this hop.
* @param {number} [rttInMilliseconds] The round-trip time from source to this hop, in milliseconds.
* @param {number} [ttl] The Time To Live (TTL) of the outgoing ICMP packet sent during this traceroute. This measures the number of hops between the vantage point and this node. When traceroutes fail due to several consecutive non-responding hops, OCI sends a packet with high TTL in an attempt to reach the target IP address. Hops with a TTL of 255 indicate such a failure has occurred, not that 255 networks were traversed to reach the target.
* @class TracerouteHop
*/
class TracerouteHop {
	constructor(mplsLabels, node, rttInMilliseconds, ttl){
		this.mplsLabels = mplsLabels;
		this.node = node;
		this.rttInMilliseconds = rttInMilliseconds;
		this.ttl = ttl;
	}
}

module.exports = TracerouteHop;
