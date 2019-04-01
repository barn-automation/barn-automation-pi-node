/**
* DHCP option for specifying how DNS (hostname resolution) is handled in the subnets in the VCN. For more information, see DNS in Your Virtual Cloud Network.
* @param {string} type The specific DHCP option. Either DomainNameServer (for {@link DhcpDnsOption}) or SearchDomain (for {@link DhcpSearchDomainOption}). Required value: DomainNameServer See {@link DhcpOption} for more information.
* @param {string} serverType VcnLocal: Reserved for future use. VcnLocalPlusInternet: Also referred to as "Internet and VCN Resolver". Instances can resolve internet hostnames (no internet gateway is required), and can resolve hostnames of instances in the VCN. This is the default value in the default set of DHCP options in the VCN. For the Internet and VCN Resolver to work across the VCN, there must also be a DNS label set for the VCN, a DNS label set for each subnet, and a hostname for each instance. The Internet and VCN Resolver also enables reverse DNS lookup, which lets you determine the hostname corresponding to the private IP address. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. CustomDnsServer: Instances use a DNS server of your choice (three maximum). Allowed values are: VcnLocal VcnLocalPlusInternet CustomDnsServer
* @param {Array<string>} [customDnsServers] If you set serverType to CustomDnsServer, specify the IP address of at least one DNS server of your choice (three maximum).
* @class DhcpDnsOption
*/
class DhcpDnsOption {
	constructor(type, serverType, customDnsServers){
		this.type = type;
		this.serverType = serverType;
		this.customDnsServers = customDnsServers;
	}
}

module.exports = DhcpDnsOption;
