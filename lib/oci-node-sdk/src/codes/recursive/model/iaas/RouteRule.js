/**
* A mapping between a destination IP address range and a virtual device to route matching packets to (a target).
* @param {string} networkEntityId Minimum: 1 Maximum: 255 The OCID for the route rule's target. For information about the type of targets you can specify, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingroutetables.htm|Route Tables}.
* @param {string} [cidrBlock] Minimum: 9 Maximum: 18 Deprecated. Instead use destination and destinationType. Requests that include both cidrBlock and destination will be rejected. A destination IP address range in CIDR notation. Matching packets will be routed to the indicated network entity (the target). Example: 0.0.0.0/0
* @param {string} [destination] Minimum: 1 Maximum: 255 Conceptually, this is the range of IP addresses used for matching when routing traffic. Required if you provide a destinationType. Allowed values: IP address range in CIDR notation. For example: 192.168.1.0/24 The cidrBlock value for a {@link Service}, if you're setting up a route rule for traffic destined for a particular Service through a service gateway. For example: oci-phx-objectstorage.
* @param {string} [destinationType] Type of destination for the rule. Required if you provide a destination. CIDR_BLOCK: If the rule's destination is an IP address range in CIDR notation. SERVICE_CIDR_BLOCK: If the rule's destination is the cidrBlock value for a {@link Service} (the rule is for traffic destined for a particular Service through a service gateway). Allowed values are: CIDR_BLOCK SERVICE_CIDR_BLOCK
* @class RouteRule
*/
class RouteRule {
	constructor(networkEntityId, cidrBlock, destination, destinationType){
		this.networkEntityId = networkEntityId;
		this.cidrBlock = cidrBlock;
		this.destination = destination;
		this.destinationType = destinationType;
	}
}

module.exports = RouteRule;
