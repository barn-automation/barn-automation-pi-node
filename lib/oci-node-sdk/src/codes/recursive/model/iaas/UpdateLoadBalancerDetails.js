/**
* Configuration details to update a load balancer.
* @param {string} [displayName] Minimum: 1 Maximum: 1024 The user-friendly display name for the load balancer. It does not have to be unique, and it is changeable. Avoid entering confidential information. Example: example_load_balancer
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateLoadBalancerDetails
*/
class UpdateLoadBalancerDetails {
	constructor(displayName, freeformTags, definedTags){
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateLoadBalancerDetails;
