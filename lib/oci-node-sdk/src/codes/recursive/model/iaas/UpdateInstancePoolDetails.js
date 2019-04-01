/**
* The data to update an instance pool.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name. Does not have to be unique.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [instanceConfigurationId] Minimum: 1 Maximum: 255 The OCID of the instance configuration associated with the instance pool.
* @param {Array<UpdateInstancePoolPlacementConfigurationDetails>} [placementConfigurations] The placement configurations for the instance pool. There should be 1 placement configuration for each desired AD.
* @param {number} [size] The number of instances that should be in the instance pool.
* @class UpdateInstancePoolDetails
*/
class UpdateInstancePoolDetails {
	constructor(definedTags, displayName, freeformTags, instanceConfigurationId, placementConfigurations, size){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.instanceConfigurationId = instanceConfigurationId;
		this.placementConfigurations = placementConfigurations;
		this.size = size;
	}
}

module.exports = UpdateInstancePoolDetails;
