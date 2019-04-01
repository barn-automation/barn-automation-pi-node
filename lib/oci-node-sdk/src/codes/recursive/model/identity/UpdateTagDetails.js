/**
* 
* @param {string} [description] Minimum: 1 Maximum: 400 The description you assign to the tag during creation.
* @param {boolean} [isRetired] Whether the tag is retired. See {@link https://docs.cloud.oracle.com/Content/Identity/Concepts/taggingoverview.htm#Retiring|Retiring Key Definitions and Namespace Definitions}.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {boolean} [isCostTracking] Indicates whether the tag is enabled for cost tracking.
* @class UpdateTagDetails
*/
class UpdateTagDetails {
	constructor(description, isRetired, freeformTags, definedTags, isCostTracking){
		this.description = description;
		this.isRetired = isRetired;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.isCostTracking = isCostTracking;
	}
}

module.exports = UpdateTagDetails;
