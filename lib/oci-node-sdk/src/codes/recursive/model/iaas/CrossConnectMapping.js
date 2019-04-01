/**
* For use with Oracle Cloud Infrastructure FastConnect. Each VirtualCircuit runs on one or more cross-connects or cross-connect groups. A CrossConnectMapping contains the properties for an individual cross-connect or cross-connect group associated with a given virtual circuit.
* @param {string} [bgpMd5AuthKey] Minimum: 1 Maximum: 255 The key for BGP MD5 authentication. Only applicable if your system requires MD5 authentication. If empty or not set (null), that means you don't use BGP MD5 authentication.
* @param {string} [crossConnectOrCrossConnectGroupId] Minimum: 1 Maximum: 255 The OCID of the cross-connect or cross-connect group for this mapping. Specified by the owner of the cross-connect or cross-connect group (the customer if the customer is colocated with Oracle, or the provider if the customer is connecting via provider).
* @param {string} [customerBgpPeeringIp] Minimum: 7 Maximum: 46 The BGP IPv4 address for the router on the other end of the BGP session from Oracle. Specified by the owner of that router. If the session goes from Oracle to a customer, this is the BGP IPv4 address of the customer's edge router. If the session goes from Oracle to a provider, this is the BGP IPv4 address of the provider's edge router. Must use a /30 or /31 subnet mask. There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses. Example: 10.0.0.18/31
* @param {string} [oracleBgpPeeringIp] Minimum: 7 Maximum: 46 The IPv4 address for Oracle's end of the BGP session. Must use a /30 or /31 subnet mask. If the session goes from Oracle to a customer's edge router, the customer specifies this information. If the session goes from Oracle to a provider's edge router, the provider specifies this. There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses. Example: 10.0.0.19/31
* @param {number} [vlan] The number of the specific VLAN (on the cross-connect or cross-connect group) that is assigned to this virtual circuit. Specified by the owner of the cross-connect or cross-connect group (the customer if the customer is colocated with Oracle, or the provider if the customer is connecting via provider). Example: 200
* @class CrossConnectMapping
*/
class CrossConnectMapping {
	constructor(bgpMd5AuthKey, crossConnectOrCrossConnectGroupId, customerBgpPeeringIp, oracleBgpPeeringIp, vlan){
		this.bgpMd5AuthKey = bgpMd5AuthKey;
		this.crossConnectOrCrossConnectGroupId = crossConnectOrCrossConnectGroupId;
		this.customerBgpPeeringIp = customerBgpPeeringIp;
		this.oracleBgpPeeringIp = oracleBgpPeeringIp;
		this.vlan = vlan;
	}
}

module.exports = CrossConnectMapping;
