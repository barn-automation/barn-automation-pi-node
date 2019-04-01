/**
 * A class that contains properties necessary to perform ListWafBlockedRequests
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {string} [timeObservedGreaterThanOrEqualTo] A filter that limits returned events to those occurring on or after a date and time, specified in RFC 3339 format. If unspecified, defaults to 30 minutes before receipt of the request.
 * @param {string} [timeObservedLessThan] A filter that limits returned events to those occurring before a date and time, specified in RFC 3339 format.
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 10.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {Array} [wafFeature] Filter stats by the Web Application Firewall feature that triggered the block action. If unspecified, data for all WAF features will be returned.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListWafBlockedRequestsRequest
 */
class ListWafBlockedRequestsRequest {

	constructor(waasPolicyId, timeObservedGreaterThanOrEqualTo, timeObservedLessThan, limit, page, wafFeature, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.waasPolicyId = waasPolicyId;
		this.timeObservedGreaterThanOrEqualTo = timeObservedGreaterThanOrEqualTo;
		this.timeObservedLessThan = timeObservedLessThan;
		this.limit = limit;
		this.page = page;
		this.wafFeature = wafFeature;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['timeObservedGreaterThanOrEqualTo'] = this.timeObservedGreaterThanOrEqualTo;
		this._queryParams['timeObservedLessThan'] = this.timeObservedLessThan;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['wafFeature'] = this.wafFeature;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['waasPolicyId'] = this.waasPolicyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListWafBlockedRequestsRequest;