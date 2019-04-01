/**
* Object used to update a stream.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateStreamDetails
*/
class UpdateStreamDetails {
	constructor(freeformTags, definedTags){
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateStreamDetails;
