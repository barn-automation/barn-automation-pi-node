/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [privateIpId] The OCID of the private IP to assign the public IP to. If the public IP is already assigned to a different private IP, it will be unassigned and then reassigned to the specified private IP. If you set this field to an empty string, the public IP will be unassigned from the private IP it is currently assigned to.
* @class UpdatePublicIpDetails
*/
class UpdatePublicIpDetails {
	constructor(definedTags, displayName, freeformTags, privateIpId){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.privateIpId = privateIpId;
	}
}

module.exports = UpdatePublicIpDetails;
