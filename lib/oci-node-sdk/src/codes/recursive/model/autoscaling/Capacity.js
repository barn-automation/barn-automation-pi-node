/**
* Capacity limits for the instance pool.
* @param {number} max The maximum number of instances the instance pool is allowed to increase to (scale out).
* @param {number} min The minimum number of instances the instance pool is allowed to decrease to (scale in).
* @param {number} initial The initial number of instances to launch in the instance pool immediately after autoscaling is enabled. After autoscaling retrieves performance metrics, the number of instances is automatically adjusted from this initial number to a number that is based on the limits that you set.
* @class Capacity
*/
class Capacity {
	constructor(max, min, initial){
		this.max = max;
		this.min = min;
		this.initial = initial;
	}
}

module.exports = Capacity;
