/**
* 
* @param {string} cidrBlock Minimum: 1 Maximum: 32 The CIDR IP address block of the VCN. Example: 172.16.0.0/16
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the VCN.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [dnsLabel] Minimum: 1 Maximum: 15 A DNS label for the VCN, used in conjunction with the VNIC's hostname and subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, bminstance-1.subnet123.vcn1.oraclevcn.com). Not required to be unique, but it's a best practice to set unique DNS labels for VCNs in your tenancy. Must be an alphanumeric string that begins with a letter. The value cannot be changed. You must set this value if you want instances to be able to use hostnames to resolve other instances in the VCN. Otherwise the Internet and VCN Resolver will not work. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. Example: vcn1
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateVcnDetails
*/
class CreateVcnDetails {
	constructor(cidrBlock, compartmentId, definedTags, displayName, dnsLabel, freeformTags){
		this.cidrBlock = cidrBlock;
		this.compartmentId = compartmentId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.dnsLabel = dnsLabel;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateVcnDetails;
