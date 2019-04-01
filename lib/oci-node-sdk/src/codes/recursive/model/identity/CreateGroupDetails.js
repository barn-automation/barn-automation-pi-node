/**
* 
* @param {string} compartmentId The OCID of the tenancy containing the group.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the group during creation. The name must be unique across all groups in the tenancy and cannot be changed.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the group during creation. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateGroupDetails
*/
class CreateGroupDetails {
	constructor(compartmentId, name, description, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.name = name;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateGroupDetails;
