/**
 * A class that contains properties necessary to perform ListEdgeSubnets
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 10.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {string} [sortBy] The value by which edge node subnets are sorted in a paginated 'List' call. If unspecified, defaults to timeModified. Allowed values are: cidr region timeModified
 * @param {string} [sortOrder] The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to DESC. Allowed values are: ASC DESC
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListEdgeSubnetsRequest
 */
class ListEdgeSubnetsRequest {

	constructor(limit, page, sortBy, sortOrder, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
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
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
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
module.exports = ListEdgeSubnetsRequest;