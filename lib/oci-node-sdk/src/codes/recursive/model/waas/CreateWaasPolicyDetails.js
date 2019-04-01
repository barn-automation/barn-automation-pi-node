/**
* The required data to create a WAAS policy.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment in which to create the WAAS policy.
* @param {string} domain The web application domain that the WAAS policy protects.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the WAAS policy. The name is can be changed and does not need to be unique.
* @param {Array<string>} [additionalDomains] An array of additional domains for the specified web application.
* @param {Object} [origins] A mapping of strings to {@link Origin} objects.
* @param {PolicyConfig} [policyConfig] 
* @param {WafConfigDetails} [wafConfig] 
* @param {Object} [freeformTags] A simple key-value pair without any defined schema.
* @param {Object} [definedTags] A key-value pair with a defined schema that restricts the values of tags. These predefined keys are scoped to namespaces.
* @class CreateWaasPolicyDetails
*/
class CreateWaasPolicyDetails {
	constructor(compartmentId, domain, displayName, additionalDomains, origins, policyConfig, wafConfig, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.domain = domain;
		this.displayName = displayName;
		this.additionalDomains = additionalDomains;
		this.origins = origins;
		this.policyConfig = policyConfig;
		this.wafConfig = wafConfig;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateWaasPolicyDetails;
