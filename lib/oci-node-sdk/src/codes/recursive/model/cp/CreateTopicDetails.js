/**
* The configuration details for creating the topic.
* @param {string} name The name of the topic being created. Avoid entering confidential information.
* @param {string} compartmentId The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment to create the topic in.
* @param {string} [description] The description of the topic being created. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateTopicDetails
*/
class CreateTopicDetails {
	constructor(name, compartmentId, description, freeformTags, definedTags){
		this.name = name;
		this.compartmentId = compartmentId;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateTopicDetails;
