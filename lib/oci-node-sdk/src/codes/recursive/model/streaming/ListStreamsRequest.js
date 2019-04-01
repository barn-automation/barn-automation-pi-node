/**
 * A class that contains properties necessary to perform ListStreams
 * @param {string} compartmentId Minimum: 1 Maximum: 1024 The OCID of the compartment.
 * @param {string} [id] Minimum: 1 Maximum: 1024 A filter to return only resources that match the given ID exactly.
 * @param {string} [name] Minimum: 1 Maximum: 1024 A filter to return only resources that match the given name exactly.
 * @param {number} [limit] The maximum number of items to return. The value must be between 1 and 50. The default is 10.
 * @param {string} [page] Minimum: 1 Maximum: 1024 The page at which to start retrieving results.
 * @param {string} [sortBy] The field to sort by. You can provide no more than one sort order. By default, TIMECREATED sorts results in descending order and NAME sorts results in ascending order. Allowed values are: NAME TIMECREATED
 * @param {string} [sortOrder] The sort order to use, either 'asc' or 'desc'. Allowed values are: ASC DESC
 * @param {string} [lifecycleState] A filter to only return resources that match the given lifecycle state. The state value is case-insensitive.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListStreamsRequest
 */
class ListStreamsRequest {

	constructor(compartmentId, id, name, limit, page, sortBy, sortOrder, lifecycleState, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.id = id;
		this.name = name;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.lifecycleState = lifecycleState;
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
		this._queryParams['name'] = this.name;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['lifecycleState'] = this.lifecycleState;
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
module.exports = ListStreamsRequest;