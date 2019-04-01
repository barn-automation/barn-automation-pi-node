/**
* 
* @param {string} [description] Minimum: 1 Maximum: 400 The description you assign to the policy. Does not have to be unique, and it's changeable.
* @param {Array<string>} [statements] An array of policy statements written in the policy language. See {@link https://docs.cloud.oracle.com/Content/Identity/Concepts/policies.htm|How Policies Work} and {@link https://docs.cloud.oracle.com/Content/Identity/Concepts/commonpolicies.htm|Common Policies}.
* @param {string} [versionDate] The version of the policy. If null or set to an empty string, when a request comes in for authorization, the policy will be evaluated according to the current behavior of the services at that moment. If set to a particular date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdatePolicyDetails
*/
class UpdatePolicyDetails {
	constructor(description, statements, versionDate, freeformTags, definedTags){
		this.description = description;
		this.statements = statements;
		this.versionDate = versionDate;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdatePolicyDetails;
