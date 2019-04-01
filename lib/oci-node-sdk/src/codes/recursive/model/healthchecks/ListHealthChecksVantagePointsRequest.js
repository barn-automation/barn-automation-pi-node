/**
 * A class that contains properties necessary to perform ListHealthChecksVantagePoints
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [sortBy] The field to sort by when listing vantage points. Allowed values are: name displayName
 * @param {string} [sortOrder] Controls the sort order of results. Allowed values are: ASC DESC
 * @param {string} [name] Filters results that exactly match the name field.
 * @param {string} [displayName] Filters results that exactly match the displayName field.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListHealthChecksVantagePointsRequest
 */
class ListHealthChecksVantagePointsRequest {

	constructor(limit, page, sortBy, sortOrder, name, displayName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.name = name;
		this.displayName = displayName;
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
		this._queryParams['name'] = this.name;
		this._queryParams['displayName'] = this.displayName;
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
module.exports = ListHealthChecksVantagePointsRequest;