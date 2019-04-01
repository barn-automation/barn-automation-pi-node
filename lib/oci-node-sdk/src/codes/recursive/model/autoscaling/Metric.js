/**
* Metric and threshold details for triggering an autoscaling action.
* @param {string} metricType Allowed values are: CPU_UTILIZATION MEMORY_UTILIZATION
* @param {Threshold} threshold 
* @class Metric
*/
class Metric {
	constructor(metricType, threshold){
		this.metricType = metricType;
		this.threshold = threshold;
	}
}

module.exports = Metric;
