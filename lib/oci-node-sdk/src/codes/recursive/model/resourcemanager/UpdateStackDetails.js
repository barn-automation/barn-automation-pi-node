/**
* Specifies which fields and the data for each to update on the specified stack.
* @param {string} [displayName] The name of the stack.
* @param {string} [description] Description of the stack.
* @param {UpdateConfigSourceDetails} [configSource] 
* @param {Object} [variables] Terraform variables associated with this resource. The maximum number of variables supported is 100. The maximum size of each variable, including both name and value, is 4096 bytes. Example: {"CompartmentId": "compartment-id-value"}
* @param {Object} [freeformTags] Free-form tags associated with this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateStackDetails
*/
class UpdateStackDetails {
	constructor(displayName, description, configSource, variables, freeformTags, definedTags){
		this.displayName = displayName;
		this.description = description;
		this.configSource = configSource;
		this.variables = variables;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateStackDetails;
