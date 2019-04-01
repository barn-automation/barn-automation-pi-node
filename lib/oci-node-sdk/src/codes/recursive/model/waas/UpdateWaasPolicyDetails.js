/**
* Updates the configuration details of a WAAS policy.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the WAAS policy. The name is can be changed and does not need to be unique.
* @param {Array<string>} [additionalDomains] An array of additional domains protected by this WAAS policy.
* @param {Object} [origins] A mapping of strings to {@link Origin} objects.
* @param {PolicyConfig} [policyConfig] 
* @param {WafConfig} [wafConfig] 
* @param {Object} [freeformTags] A simple key-value pair without any defined schema.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}.
* @class UpdateWaasPolicyDetails
*/
class UpdateWaasPolicyDetails {
	constructor(displayName, additionalDomains, origins, policyConfig, wafConfig, freeformTags, definedTags){
		this.displayName = displayName;
		this.additionalDomains = additionalDomains;
		this.origins = origins;
		this.policyConfig = policyConfig;
		this.wafConfig = wafConfig;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateWaasPolicyDetails;
