/**
* Contains properties for a VNIC. You use this object when creating the primary VNIC during instance launch or when creating a secondary VNIC. For more information about VNICs, see Virtual Network Interface Cards (VNICs).
* @param {string} subnetId Minimum: 1 Maximum: 255 The OCID of the subnet to create the VNIC in. When launching an instance, use this subnetId instead of the deprecated subnetId in {@link LaunchInstanceDetails}. At least one of them is required; if you provide both, the values must match.
* @param {boolean} [assignPublicIp] Whether the VNIC should be assigned a public IP address. Defaults to whether the subnet is public or private. If not set and the VNIC is being created in a private subnet (that is, where prohibitPublicIpOnVnic = true in the {@link Subnet}), then no public IP address is assigned. If not set and the subnet is public (prohibitPublicIpOnVnic = false), then a public IP address is assigned. If set to true and prohibitPublicIpOnVnic = true, an error is returned. Note: This public IP address is associated with the primary private IP on the VNIC. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingIPaddresses.htm|IP Addresses}. Note: There's a limit to the number of {@link public IPs} a VNIC or instance can have. If you try to create a secondary VNIC with an assigned public IP for an instance that has already reached its public IP limit, an error is returned. For information about the public IP limits, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingpublicIPs.htm|Public IP Addresses}. Example: false
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the VNIC. Does not have to be unique. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63 The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN) (for example, bminstance-1 in FQDN bminstance-1.subnet123.vcn1.oraclevcn.com). Must be unique across all VNICs in the subnet and comply with {@link https://tools.ietf.org/html/rfc952|RFC 952} and {@link https://tools.ietf.org/html/rfc1123|RFC 1123}. The value appears in the {@link Vnic} object and also the {@link PrivateIp} object returned by {@link ListPrivateIps} and {@link GetPrivateIp}. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. When launching an instance, use this hostnameLabel instead of the deprecated hostnameLabel in {@link LaunchInstanceDetails}. If you provide both, the values must match. Example: bminstance-1
* @param {string} [privateIp] Minimum: 1 Maximum: 46 A private IP address of your choice to assign to the VNIC. Must be an available IP address within the subnet's CIDR. If you don't specify a value, Oracle automatically assigns a private IP address from the subnet. This is the VNIC's primary private IP address. The value appears in the {@link Vnic} object and also the {@link PrivateIp} object returned by {@link ListPrivateIps} and {@link GetPrivateIp}. Example: 10.0.3.3
* @param {boolean} [skipSourceDestCheck] Whether the source/destination check is disabled on the VNIC. Defaults to false, which means the check is performed. For information about why you would skip the source/destination check, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingroutetables.htm#privateip|Using a Private IP as a Route Target}. Example: true
* @class CreateVnicDetails
*/
class CreateVnicDetails {
	constructor(subnetId, assignPublicIp, definedTags, displayName, freeformTags, hostnameLabel, privateIp, skipSourceDestCheck){
		this.subnetId = subnetId;
		this.assignPublicIp = assignPublicIp;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.hostnameLabel = hostnameLabel;
		this.privateIp = privateIp;
		this.skipSourceDestCheck = skipSourceDestCheck;
	}
}

module.exports = CreateVnicDetails;
