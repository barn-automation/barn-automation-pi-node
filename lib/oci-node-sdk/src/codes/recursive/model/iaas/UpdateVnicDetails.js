/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63 The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN) (for example, bminstance-1 in FQDN bminstance-1.subnet123.vcn1.oraclevcn.com). Must be unique across all VNICs in the subnet and comply with {@link https://tools.ietf.org/html/rfc952|RFC 952} and {@link https://tools.ietf.org/html/rfc1123|RFC 1123}. The value appears in the {@link Vnic} object and also the {@link PrivateIp} object returned by {@link ListPrivateIps} and {@link GetPrivateIp}. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}.
* @param {boolean} [skipSourceDestCheck] Whether the source/destination check is disabled on the VNIC. Defaults to false, which means the check is performed. For information about why you would skip the source/destination check, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingroutetables.htm#privateip|Using a Private IP as a Route Target}. Example: true
* @class UpdateVnicDetails
*/
class UpdateVnicDetails {
	constructor(definedTags, displayName, freeformTags, hostnameLabel, skipSourceDestCheck){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.hostnameLabel = hostnameLabel;
		this.skipSourceDestCheck = skipSourceDestCheck;
	}
}

module.exports = UpdateVnicDetails;
