/**
* 
* @param {string} cidrBlock Minimum: 1 Maximum: 32 The CIDR IP address range of the subnet. Example: 172.16.1.0/24
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the subnet.
* @param {string} vcnId Minimum: 1 Maximum: 255 The OCID of the VCN to contain the subnet.
* @param {string} [availabilityDomain] Minimum: 1 Maximum: 255 Controls whether the subnet is regional or specific to an availability domain. Oracle recommends creating regional subnets because they're more flexible and make it easier to implement failover across availability domains. Originally, AD-specific subnets were the only kind available to use. To create a regional subnet, omit this attribute. Then any resources later created in this subnet (such as a Compute instance) can be created in any availability domain in the region. To instead create an AD-specific subnet, set this attribute to the availability domain you want this subnet to be in. Then any resources later created in this subnet can only be created in that availability domain. Example: Uocm:PHX-AD-1
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [dhcpOptionsId] Minimum: 1 Maximum: 255 The OCID of the set of DHCP options the subnet will use. If you don't provide a value, the subnet uses the VCN's default set of DHCP options.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [dnsLabel] Minimum: 1 Maximum: 15 A DNS label for the subnet, used in conjunction with the VNIC's hostname and VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, bminstance-1.subnet123.vcn1.oraclevcn.com). Must be an alphanumeric string that begins with a letter and is unique within the VCN. The value cannot be changed. This value must be set if you want to use the Internet and VCN Resolver to resolve the hostnames of instances in the subnet. It can only be set if the VCN itself was created with a DNS label. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. Example: subnet123
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {boolean} [prohibitPublicIpOnVnic] Whether VNICs within this subnet can have public IP addresses. Defaults to false, which means VNICs created in this subnet will automatically be assigned public IP addresses unless specified otherwise during instance launch or VNIC creation (with the assignPublicIp flag in {@link CreateVnicDetails}). If prohibitPublicIpOnVnic is set to true, VNICs created in this subnet cannot have public IP addresses (that is, it's a private subnet). Example: true
* @param {string} [routeTableId] Minimum: 1 Maximum: 255 The OCID of the route table the subnet will use. If you don't provide a value, the subnet uses the VCN's default route table.
* @param {Array<string>} [securityListIds] The OCIDs of the security list or lists the subnet will use. If you don't provide a value, the subnet uses the VCN's default security list. Remember that security lists are associated with the subnet, but the rules are applied to the individual VNICs in the subnet.
* @class CreateSubnetDetails
*/
class CreateSubnetDetails {
	constructor(cidrBlock, compartmentId, vcnId, availabilityDomain, definedTags, dhcpOptionsId, displayName, dnsLabel, freeformTags, prohibitPublicIpOnVnic, routeTableId, securityListIds){
		this.cidrBlock = cidrBlock;
		this.compartmentId = compartmentId;
		this.vcnId = vcnId;
		this.availabilityDomain = availabilityDomain;
		this.definedTags = definedTags;
		this.dhcpOptionsId = dhcpOptionsId;
		this.displayName = displayName;
		this.dnsLabel = dnsLabel;
		this.freeformTags = freeformTags;
		this.prohibitPublicIpOnVnic = prohibitPublicIpOnVnic;
		this.routeTableId = routeTableId;
		this.securityListIds = securityListIds;
	}
}

module.exports = CreateSubnetDetails;
