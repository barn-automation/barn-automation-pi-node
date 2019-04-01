/**
* Metric value for a specific timestamp.
* @param {string} timestamp Timestamp for this metric value. Format defined by RFC3339. Example: 2019-02-01T01:02:29.600Z
* @param {number} value Numeric value of the metric. Example: 10.23
* @param {number} [count] The number of occurrences of the associated value in the set of data. Optional. Default is 1. Value must be greater than zero.
* @class Datapoint
*/
class Datapoint {
	constructor(timestamp, value, count){
		this.timestamp = timestamp;
		this.value = value;
		this.count = count;
	}
}

module.exports = Datapoint;
