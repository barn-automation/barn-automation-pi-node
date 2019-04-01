/**
* A timestamp-value pair returned for the specified request.
* @param {string} timestamp The date and time associated with the value of this data point. Format defined by RFC3339. Example: 2019-02-01T01:02:29.600Z
* @param {number} value Numeric value of the metric. Example: 10.4
* @class AggregatedDatapoint
*/
class AggregatedDatapoint {
	constructor(timestamp, value){
		this.timestamp = timestamp;
		this.value = value;
	}
}

module.exports = AggregatedDatapoint;
