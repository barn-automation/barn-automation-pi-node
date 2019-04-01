/**
 * A class that contains properties necessary to perform SearchResources
 * @param {SearchResourcesDetails} searchResourcesDetails An instance of {@link SearchResourcesDetails}
 * @param {number} [limit] The maximum number of items to return. The value must be between 1 and 1000.
 * @param {string} [page] Minimum: 1 Maximum: 1024 The page at which to start retrieving results.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class SearchResourcesRequest
 */
class SearchResourcesRequest {

	constructor(searchResourcesDetails, limit, page, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = searchResourcesDetails;
		this.searchResourcesDetails = searchResourcesDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = SearchResourcesRequest;