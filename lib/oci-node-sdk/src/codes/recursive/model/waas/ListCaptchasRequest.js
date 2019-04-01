/**
 * A class that contains properties necessary to perform ListCaptchas
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 10.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListCaptchasRequest
 */
class ListCaptchasRequest {

	constructor(waasPolicyId, limit, page, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.waasPolicyId = waasPolicyId;
		this.limit = limit;
		this.page = page;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
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
module.exports = ListCaptchasRequest;