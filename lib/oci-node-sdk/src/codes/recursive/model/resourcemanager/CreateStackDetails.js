/**
* Properties provided for creating a stack.
* @param {string} compartmentId Unique identifier (OCID) of the compartment in which the stack resides.
* @param {CreateConfigSourceDetails} configSource 
* @param {string} [displayName] The stack's display name.
* @param {string} [description] Description of the stack.
* @param {Object} [variables] Terraform variables associated with this resource. Maximum number of variables supported is 100. The maximum size of each variable, including both name and value, is 4096 bytes. Example: {"CompartmentId": "compartment-id-value"}
* @param {Object} [freeformTags] Free-form tags associated with this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags associated with this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateStackDetails
*/
class CreateStackDetails {
	constructor(compartmentId, configSource, displayName, description, variables, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.configSource = configSource;
		this.displayName = displayName;
		this.description = description;
		this.variables = variables;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateStackDetails;
