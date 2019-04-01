/**
* Update details for a condition in a threshold-based autoscaling policy.
* @param {Action} action 
* @param {Metric} metric 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class UpdateConditionDetails
*/
class UpdateConditionDetails {
	constructor(action, metric, displayName){
		this.action = action;
		this.metric = metric;
		this.displayName = displayName;
	}
}

module.exports = UpdateConditionDetails;
