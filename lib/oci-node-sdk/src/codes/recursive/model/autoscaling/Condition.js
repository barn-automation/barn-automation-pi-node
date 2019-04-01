/**
* A rule that defines a specific autoscaling action to take (scale in or scale out) and the metric that triggers that action.
* @param {Action} action 
* @param {Metric} metric 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [id] ID of the condition that is assigned after creation.
* @class Condition
*/
class Condition {
	constructor(action, metric, displayName, id){
		this.action = action;
		this.metric = metric;
		this.displayName = displayName;
		this.id = id;
	}
}

module.exports = Condition;
