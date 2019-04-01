/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the public IP. For ephemeral public IPs, you must set this to the private IP's compartment OCID.
* @param {string} lifetime Defines when the public IP is deleted and released back to the Oracle Cloud Infrastructure public IP pool. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingpublicIPs.htm|Public IP Addresses}. Allowed values are: EPHEMERAL RESERVED
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [privateIpId] Minimum: 1 Maximum: 255 The OCID of the private IP to assign the public IP to. Required for an ephemeral public IP because it must always be assigned to a private IP (specifically a primary private IP). Optional for a reserved public IP. If you don't provide it, the public IP is created but not assigned to a private IP. You can later assign the public IP with {@link UpdatePublicIp}.
* @class CreatePublicIpDetails
*/
class CreatePublicIpDetails {
	constructor(compartmentId, lifetime, definedTags, displayName, freeformTags, privateIpId){
		this.compartmentId = compartmentId;
		this.lifetime = lifetime;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.privateIpId = privateIpId;
	}
}

module.exports = CreatePublicIpDetails;
