/**
* A rule for allowing inbound IP packets.
* @param {string} protocol The transport protocol. Specify either all or an IPv4 protocol number as defined in {@link http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml|Protocol Numbers}. Options are supported only for ICMP ("1"), TCP ("6"), and UDP ("17").
* @param {string} source Conceptually, this is the range of IP addresses that a packet coming into the instance can come from. Allowed values: IP address range in CIDR notation. For example: 192.168.1.0/24 The cidrBlock value for a {@link Service}, if you're setting up a security list rule for traffic coming from a particular Service through a service gateway. For example: oci-phx-objectstorage.
* @param {IcmpOptions} [icmpOptions] Optional and valid only for ICMP. Use to specify a particular ICMP type and code as defined in {@link http://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml|ICMP Parameters}. If you specify ICMP as the protocol but omit this object, then all ICMP types and codes are allowed. If you do provide this object, the type is required and the code is optional. To enable MTU negotiation for ingress internet traffic, make sure to allow type 3 ("Destination Unreachable") code 4 ("Fragmentation Needed and Don't Fragment was Set"). If you need to specify multiple codes for a single type, create a separate security list rule for each.
* @param {boolean} [isStateless] A stateless rule allows traffic in one direction. Remember to add a corresponding stateless rule in the other direction if you need to support bidirectional traffic. For example, if ingress traffic allows TCP destination port 80, there should be an egress rule to allow TCP source port 80. Defaults to false, which means the rule is stateful and a corresponding rule is not necessary for bidirectional traffic.
* @param {string} [sourceType] Type of source for the rule. The default is CIDR_BLOCK. CIDR_BLOCK: If the rule's source is an IP address range in CIDR notation. SERVICE_CIDR_BLOCK: If the rule's source is the cidrBlock value for a {@link Service} (the rule is for traffic coming from a particular Service through a service gateway). Allowed values are: CIDR_BLOCK SERVICE_CIDR_BLOCK
* @param {TcpOptions} [tcpOptions] Optional and valid only for TCP. Use to specify particular destination ports for TCP rules. If you specify TCP as the protocol but omit this object, then all destination ports are allowed.
* @param {UdpOptions} [udpOptions] Optional and valid only for UDP. Use to specify particular destination ports for UDP rules. If you specify UDP as the protocol but omit this object, then all destination ports are allowed.
* @class IngressSecurityRule
*/
class IngressSecurityRule {
	constructor(protocol, source, icmpOptions, isStateless, sourceType, tcpOptions, udpOptions){
		this.protocol = protocol;
		this.source = source;
		this.icmpOptions = icmpOptions;
		this.isStateless = isStateless;
		this.sourceType = sourceType;
		this.tcpOptions = tcpOptions;
		this.udpOptions = udpOptions;
	}
}

module.exports = IngressSecurityRule;
