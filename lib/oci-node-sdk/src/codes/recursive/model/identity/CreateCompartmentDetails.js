/**
* 
* @param {string} compartmentId The OCID of the parent compartment containing the compartment.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the compartment during creation. The name must be unique across all compartments in the parent compartment. Avoid entering confidential information.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the compartment during creation. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateCompartmentDetails
*/
class CreateCompartmentDetails {
	constructor(compartmentId, name, description, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.name = name;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateCompartmentDetails;
