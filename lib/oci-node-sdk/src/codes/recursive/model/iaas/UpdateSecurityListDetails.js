/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Array<EgressSecurityRule>} [egressSecurityRules] Rules for allowing egress IP packets.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Array<IngressSecurityRule>} [ingressSecurityRules] Rules for allowing ingress IP packets.
* @class UpdateSecurityListDetails
*/
class UpdateSecurityListDetails {
	constructor(definedTags, displayName, egressSecurityRules, freeformTags, ingressSecurityRules){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.egressSecurityRules = egressSecurityRules;
		this.freeformTags = freeformTags;
		this.ingressSecurityRules = ingressSecurityRules;
	}
}

module.exports = UpdateSecurityListDetails;
