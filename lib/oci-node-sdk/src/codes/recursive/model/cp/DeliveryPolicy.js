/**
* The subscription delivery policy.
* @param {BackoffRetryPolicy} [backoffRetryPolicy] 
* @class DeliveryPolicy
*/
class DeliveryPolicy {
	constructor(backoffRetryPolicy){
		this.backoffRetryPolicy = backoffRetryPolicy;
	}
}

module.exports = DeliveryPolicy;
