/**
 * A class that contains properties necessary to perform ListWorkRequests
 * @param {string} compartmentId The ID of the compartment in which to list buckets.
 * @param {string} [page] Minimum: 1 Maximum: 1024 The page at which to start retrieving results.
 * @param {number} [limit] The maximum number of items to return.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class ListWorkRequestsRequest
 */
class ListWorkRequestsRequest {

	constructor(compartmentId, page, limit, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.page = page;
		this.limit = limit;
		this.opcClientRequestId = opcClientRequestId;
	}

	get headers(){
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
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
module.exports = ListWorkRequestsRequest;