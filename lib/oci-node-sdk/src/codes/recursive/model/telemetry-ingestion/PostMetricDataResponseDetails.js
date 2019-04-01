/**
* The response object returned from a PostMetricData operation.
* @param {number} failedMetricsCount The number of metric objects that failed input validation.
* @param {Array<FailedMetricRecord>} [failedMetrics] A list of records identifying metric objects that failed input validation and the reasons for the failures.
* @class PostMetricDataResponseDetails
*/
class PostMetricDataResponseDetails {
	constructor(failedMetricsCount, failedMetrics){
		this.failedMetricsCount = failedMetricsCount;
		this.failedMetrics = failedMetrics;
	}
}

module.exports = PostMetricDataResponseDetails;
