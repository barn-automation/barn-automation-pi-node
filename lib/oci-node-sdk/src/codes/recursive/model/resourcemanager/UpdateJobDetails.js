/**
* Updates the display name, free-form tags, and/or defined tag properties of the job.
* @param {string} [displayName] The new display name to set.
* @param {Object} [freeformTags] Free-form tags associated with this resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateJobDetails
*/
class UpdateJobDetails {
	constructor(displayName, freeformTags, definedTags){
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateJobDetails;
