/**
 * A class that contains properties necessary to perform UpdateSubscription
 * @param {string} subscriptionId The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the subscription to update.
 * @param {UpdateSubscriptionDetails} updateSubscriptionDetails An instance of {@link UpdateSubscriptionDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [ifMatch] Used for optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateSubscriptionRequest
 */
class UpdateSubscriptionRequest {

	constructor(subscriptionId, updateSubscriptionDetails, opcRequestId, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateSubscriptionDetails;
		this.subscriptionId = subscriptionId;
		this.updateSubscriptionDetails = updateSubscriptionDetails;
		this.opcRequestId = opcRequestId;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['subscriptionId'] = this.subscriptionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateSubscriptionRequest;