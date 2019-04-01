/**
* 
* @param {string} policyType Minimum: 1 Maximum: 100 Indicates the type of autoscaling policy. Required value: threshold See {@link UpdateAutoScalingPolicyDetails} for more information.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Capacity} [capacity] The capacity requirements of the autoscaling policy.
* @param {Array<UpdateConditionDetails>} [rules] 
* @class UpdateThresholdPolicyDetails
*/
class UpdateThresholdPolicyDetails {
	constructor(policyType, displayName, capacity, rules){
		this.policyType = policyType;
		this.displayName = displayName;
		this.capacity = capacity;
		this.rules = rules;
	}
}

module.exports = UpdateThresholdPolicyDetails;
