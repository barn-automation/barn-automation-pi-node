/**
 * A class that contains properties necessary to perform ListHttpMonitors
 * @param {string} compartmentId Filters results by compartment.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [sortBy] The field to sort by when listing monitors. Allowed values are: id displayName
 * @param {string} [sortOrder] Controls the sort order of results. Allowed values are: ASC DESC
 * @param {string} [displayName] Filters results that exactly match the displayName field.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListHttpMonitorsRequest
 */
class ListHttpMonitorsRequest {

	constructor(compartmentId, limit, page, sortBy, sortOrder, displayName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
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
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
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
module.exports = ListHttpMonitorsRequest;