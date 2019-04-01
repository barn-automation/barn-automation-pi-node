/**
* Creation details for a threshold-based autoscaling policy.
* @param {Capacity} capacity The capacity requirements of the autoscaling policy.
* @param {string} policyType Minimum: 1 Maximum: 100 The type of autoscaling policy. Required value: threshold See {@link CreateAutoScalingPolicyDetails} for more information.
* @param {Array<CreateConditionDetails>} rules 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class CreateThresholdPolicyDetails
*/
class CreateThresholdPolicyDetails {
	constructor(capacity, policyType, rules, displayName){
		this.capacity = capacity;
		this.policyType = policyType;
		this.rules = rules;
		this.displayName = displayName;
	}
}

module.exports = CreateThresholdPolicyDetails;
