/**
* An autoscaling policy that defines threshold-based rules for an autoscaling configuration.
* @param {Capacity} capacity The capacity requirements of the autoscaling policy.
* @param {string} policyType Minimum: 1 Maximum: 100 The type of autoscaling policy. Required value: threshold See {@link AutoScalingPolicy} for more information.
* @param {string} timeCreated The date and time the autoscaling configuration was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @param {Array<Condition>} rules 
* @param {string} [id] Minimum: 1 Maximum: 255 The ID of the autoscaling policy that is assigned after creation.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class ThresholdPolicy
*/
class ThresholdPolicy {
	constructor(capacity, policyType, timeCreated, rules, id, displayName){
		this.capacity = capacity;
		this.policyType = policyType;
		this.timeCreated = timeCreated;
		this.rules = rules;
		this.id = id;
		this.displayName = displayName;
	}
}

module.exports = ThresholdPolicy;
