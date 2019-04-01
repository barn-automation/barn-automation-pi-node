/**
* Details for creating the mount target.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain in which to create the mount target. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment in which to create the mount target.
* @param {string} subnetId Minimum: 1 Maximum: 255 The OCID of the subnet in which to create the mount target.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. It does not have to be unique, and it is changeable. Avoid entering confidential information. Example: My mount target
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63 The hostname for the mount target's IP address, used for DNS resolution. The value is the hostname portion of the private IP address's fully qualified domain name (FQDN). For example, files-1 in the FQDN files-1.subnet123.vcn1.oraclevcn.com. Must be unique across all VNICs in the subnet and comply with {@link https://tools.ietf.org/html/rfc952|RFC 952} and {@link https://tools.ietf.org/html/rfc1123|RFC 1123}. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm|DNS in Your Virtual Cloud Network}. Example: files-1
* @param {string} [ipAddress] Minimum: 1 Maximum: 32 A private IP address of your choice. Must be an available IP address within the subnet's CIDR. If you don't specify a value, Oracle automatically assigns a private IP address from the subnet. Example: 10.0.3.3
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateMountTargetDetails
*/
class CreateMountTargetDetails {
	constructor(availabilityDomain, compartmentId, subnetId, displayName, hostnameLabel, ipAddress, freeformTags, definedTags){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.subnetId = subnetId;
		this.displayName = displayName;
		this.hostnameLabel = hostnameLabel;
		this.ipAddress = ipAddress;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateMountTargetDetails;
