/**
* The record of a single metric object that failed input validation and the reason for the failure.
* @param {string} message An error message indicating the reason that the indicated metric object failed input validation.
* @param {MetricDataDetails} metricData Identifier of a metric object that failed input validation.
* @class FailedMetricRecord
*/
class FailedMetricRecord {
	constructor(message, metricData){
		this.message = message;
		this.metricData = metricData;
	}
}

module.exports = FailedMetricRecord;
