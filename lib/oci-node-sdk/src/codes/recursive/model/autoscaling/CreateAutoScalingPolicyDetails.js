/**
* Creation details for an autoscaling policy.
* @param {Capacity} capacity The capacity requirements of the autoscaling policy.
* @param {string} policyType Minimum: 1 Maximum: 100 The type of autoscaling policy. Allowed values are: threshold (See {@link CreateThresholdPolicyDetails})
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class CreateAutoScalingPolicyDetails
*/
class CreateAutoScalingPolicyDetails {
	constructor(capacity, policyType, displayName){
		this.capacity = capacity;
		this.policyType = policyType;
		this.displayName = displayName;
	}
}

module.exports = CreateAutoScalingPolicyDetails;
