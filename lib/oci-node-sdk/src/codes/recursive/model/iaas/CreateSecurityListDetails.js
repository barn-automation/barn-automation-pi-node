/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the security list.
* @param {Array<EgressSecurityRule>} egressSecurityRules Rules for allowing egress IP packets.
* @param {Array<IngressSecurityRule>} ingressSecurityRules Rules for allowing ingress IP packets.
* @param {string} vcnId Minimum: 1 Maximum: 255 The OCID of the VCN the security list belongs to.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateSecurityListDetails
*/
class CreateSecurityListDetails {
	constructor(compartmentId, egressSecurityRules, ingressSecurityRules, vcnId, definedTags, displayName, freeformTags){
		this.compartmentId = compartmentId;
		this.egressSecurityRules = egressSecurityRules;
		this.ingressSecurityRules = ingressSecurityRules;
		this.vcnId = vcnId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateSecurityListDetails;
