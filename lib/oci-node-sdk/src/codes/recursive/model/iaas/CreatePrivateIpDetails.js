/**
* 
* @param {string} vnicId Minimum: 1 Maximum: 255 The OCID of the VNIC to assign the private IP to. The VNIC and private IP must be in the same subnet.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63 The hostname for the private IP. Used for DNS. The value is the hostname portion of the private IP's fully qualified domain name (FQDN) (for example, bminstance-1 in FQDN bminstance-1.subnet123.vcn1.oraclevcn.com). Must be unique across all VNICs in the subnet and comply with {@link https://tools.ietf.org/html/rfc952|RFC 952} and {@link https://tools.ietf.org/html/rfc1123|RFC 1123}. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. Example: bminstance-1
* @param {string} [ipAddress] Minimum: 1 Maximum: 32 A private IP address of your choice. Must be an available IP address within the subnet's CIDR. If you don't specify a value, Oracle automatically assigns a private IP address from the subnet. Example: 10.0.3.3
* @class CreatePrivateIpDetails
*/
class CreatePrivateIpDetails {
	constructor(vnicId, definedTags, displayName, freeformTags, hostnameLabel, ipAddress){
		this.vnicId = vnicId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.hostnameLabel = hostnameLabel;
		this.ipAddress = ipAddress;
	}
}

module.exports = CreatePrivateIpDetails;
