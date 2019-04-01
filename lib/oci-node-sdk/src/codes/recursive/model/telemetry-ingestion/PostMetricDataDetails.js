/**
* An array of metric objects containing raw metric data points to be posted to the Monitoring service.
* @param {Array<MetricDataDetails>} metricData A metric object containing raw metric data points to be posted to the Monitoring service.
* @param {string} [batchAtomicity] Batch atomicity behavior. Requires either partial or full pass of input validation for metric objects in PostMetricData requests. The default value of NON_ATOMIC requires a partial pass: at least one metric object in the request must pass input validation, and any objects that failed validation are identified in the returned summary, along with their error messages. A value of ATOMIC requires a full pass: all metric objects in the request must pass input validation. Example: NON_ATOMIC Allowed values are: ATOMIC NON_ATOMIC
* @class PostMetricDataDetails
*/
class PostMetricDataDetails {
	constructor(metricData, batchAtomicity){
		this.metricData = metricData;
		this.batchAtomicity = batchAtomicity;
	}
}

module.exports = PostMetricDataDetails;
