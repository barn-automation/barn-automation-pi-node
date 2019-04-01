/**
* A single DHCP option according to RFC 1533. The two options available to use are DhcpDnsOption and DhcpSearchDomainOption. For more information, see DNS in Your Virtual Cloud Network and DHCP Options.
* @param {string} type The specific DHCP option. Either DomainNameServer (for {@link DhcpDnsOption}) or SearchDomain (for {@link DhcpSearchDomainOption}). Allowed values are: DomainNameServer (See {@link DhcpDnsOption}) SearchDomain (See {@link DhcpSearchDomainOption})
* @class DhcpOption
*/
class DhcpOption {
	constructor(type){
		this.type = type;
	}
}

module.exports = DhcpOption;
