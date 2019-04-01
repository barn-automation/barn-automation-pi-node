/**
* Creation details for an autoscaling configuration.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the autoscaling configuration. The autoscaling configuration and the instance pool that it manages must be in the same compartment.
* @param {Array<CreateAutoScalingPolicyDetails>} policies 
* @param {Resource} resource 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {number} [coolDownInSeconds] The minimum period of time to wait between scaling actions. The cooldown period gives the system time to stabilize before rescaling. The minimum value is 300 seconds, which is also the default.
* @param {boolean} [isEnabled] Whether the autoscaling configuration is enabled.
* @class CreateAutoScalingConfigurationDetails
*/
class CreateAutoScalingConfigurationDetails {
	constructor(compartmentId, policies, resource, definedTags, displayName, freeformTags, coolDownInSeconds, isEnabled){
		this.compartmentId = compartmentId;
		this.policies = policies;
		this.resource = resource;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.coolDownInSeconds = coolDownInSeconds;
		this.isEnabled = isEnabled;
	}
}

module.exports = CreateAutoScalingConfigurationDetails;
