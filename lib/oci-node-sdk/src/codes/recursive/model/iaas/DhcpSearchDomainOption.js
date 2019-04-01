/**
* DHCP option for specifying a search domain name for DNS queries. For more information, see DNS in Your Virtual Cloud Network.
* @param {string} type The specific DHCP option. Either DomainNameServer (for {@link DhcpDnsOption}) or SearchDomain (for {@link DhcpSearchDomainOption}). Required value: SearchDomain See {@link DhcpOption} for more information.
* @param {Array<string>} searchDomainNames A single search domain name according to {@link https://tools.ietf.org/html/rfc952|RFC 952} and {@link https://tools.ietf.org/html/rfc1123|RFC 1123}. During a DNS query, the OS will append this search domain name to the value being queried. If you set {@link DhcpDnsOption} to VcnLocalPlusInternet, and you assign a DNS label to the VCN during creation, the search domain name in the VCN's default set of DHCP options is automatically set to the VCN domain (for example, vcn1.oraclevcn.com). If you don't want to use a search domain name, omit this option from the set of DHCP options. Do not include this option with an empty list of search domain names, or with an empty string as the value for any search domain name.
* @class DhcpSearchDomainOption
*/
class DhcpSearchDomainOption {
	constructor(type, searchDomainNames){
		this.type = type;
		this.searchDomainNames = searchDomainNames;
	}
}

module.exports = DhcpSearchDomainOption;
