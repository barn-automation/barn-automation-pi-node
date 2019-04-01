/**
* The backoff retry portion of the subscription delivery policy.
* @param {number} maxRetryDuration The maximum retry duration in milliseconds. Valid range is 60000 to 7200000. Default value is 7200000 (2 hours).
* @param {string} policyType The type of delivery policy. Default value: EXPONENTIAL. Allowed values are: EXPONENTIAL
* @class BackoffRetryPolicy
*/
class BackoffRetryPolicy {
	constructor(maxRetryDuration, policyType){
		this.maxRetryDuration = maxRetryDuration;
		this.policyType = policyType;
	}
}

module.exports = BackoffRetryPolicy;
