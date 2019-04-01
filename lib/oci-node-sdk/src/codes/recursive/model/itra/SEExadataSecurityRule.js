/**
* MyServices Exadata Security Rule. Each rule defines an element in the white-list of allowed network access points
* @param {string} [direction] Direction of the network communications that are subject to this rule. Allowed values: [ingress | egress] for inbound (configures the rule to allow network communications to be received from the location specified in the rule) or outbound (configures the rule to allow network communications to be sent to the location specified in the rule).
* @param {string} [proto] Network Protocol. Allowed values: [tcp | udp].
* @param {number} [startPort] startPort and endPort define the range of ports to open/white-list [0 - 65535]. startPort <= endPort and startPort == endPort to open only 1 port.
* @param {number} [endPort] See startPort.
* @param {string} [ipSubnet] Specifies the IP addresses that are subject to this rule. Specify a single IP address, or specify a range of IP addresses using Classless Inter-Domain Routing (CIDR) notation.
* @param {string} [ruleInterface] Network interface that is subject to this rule. Allowed values: [admin | client | backup]. admin: The rule applies to network communications over the administration network interface. The administration network is typically used to support administration tasks by using terminal sessions, monitoring agents, and so on. client: The rule applies to network communications over the client access network interface, which is typically used by Oracle Net (database) connections. backup: The rule applies to network communications over the backup network interface, which is typically used to transport backup information to and from network-based storage that is separate from Exadata Cloud Service.
* @class SEExadataSecurityRule
*/
class SEExadataSecurityRule {
	constructor(direction, proto, startPort, endPort, ipSubnet, ruleInterface){
		this.direction = direction;
		this.proto = proto;
		this.startPort = startPort;
		this.endPort = endPort;
		this.ipSubnet = ipSubnet;
		this.ruleInterface = ruleInterface;
	}
}

module.exports = SEExadataSecurityRule;
