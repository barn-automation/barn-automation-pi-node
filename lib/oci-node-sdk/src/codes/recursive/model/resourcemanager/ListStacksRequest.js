/**
 * A class that contains properties necessary to perform ListStacks
 * @param {string} [compartmentId] The compartment OCID on which to filter.
 * @param {string} [id] The OCID on which to query for a stack.
 * @param {string} [lifecycleState] A filter that returns only those resources that match the specified lifecycle state. The state value is case-insensitive. Allowable values: CREATING ACTIVE DELETING DELETED
 * @param {string} [displayName] Display name on which to query.
 * @param {string} [sortBy] Specifies the field on which to sort. By default, TIMECREATED is ordered descending. By default, DISPLAYNAME is ordered ascending. Note that you can sort only on one field. Allowed values are: TIMECREATED DISPLAYNAME
 * @param {string} [sortOrder] The sort order, either ASC (ascending) or DESC (descending). Allowed values are: ASC DESC
 * @param {number} [limit] The number of items returned in a paginated List call. For information about pagination, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the preceding List call. For information about pagination, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListStacksRequest
 */
class ListStacksRequest {

	constructor(compartmentId, id, lifecycleState, displayName, sortBy, sortOrder, limit, page, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.displayName = displayName;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
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
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['id'] = this.id;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['displayName'] = this.displayName;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
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
module.exports = ListStacksRequest;