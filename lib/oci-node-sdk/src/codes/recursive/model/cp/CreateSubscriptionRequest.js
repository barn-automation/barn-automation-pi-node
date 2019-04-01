/**
 * A class that contains properties necessary to perform CreateSubscription
 * @param {CreateSubscriptionDetails} createSubscriptionDetails An instance of {@link CreateSubscriptionDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before that due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreateSubscriptionRequest
 */
class CreateSubscriptionRequest {

	constructor(createSubscriptionDetails, opcRetryToken, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createSubscriptionDetails;
		this.createSubscriptionDetails = createSubscriptionDetails;
		this.opcRetryToken = opcRetryToken;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateSubscriptionRequest;