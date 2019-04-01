/**
* This resource has one or more subtypes based on the value of the policyType attribute:
* @param {string} policyType Minimum: 1 Maximum: 100 Indicates the type of autoscaling policy. Allowed values are: threshold (See {@link UpdateThresholdPolicyDetails})
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Capacity} [capacity] The capacity requirements of the autoscaling policy.
* @class UpdateAutoScalingPolicyDetails
*/
class UpdateAutoScalingPolicyDetails {
	constructor(policyType, displayName, capacity){
		this.policyType = policyType;
		this.displayName = displayName;
		this.capacity = capacity;
	}
}

module.exports = UpdateAutoScalingPolicyDetails;
