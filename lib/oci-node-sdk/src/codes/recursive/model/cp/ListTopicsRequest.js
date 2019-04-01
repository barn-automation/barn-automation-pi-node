/**
 * A class that contains properties necessary to perform ListTopics
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
 * @param {string} [id] Minimum: 1 Maximum: 1024 A filter to only return resources that match the given id exactly.
 * @param {string} [name] Minimum: 1 Maximum: 1024 A filter to only return resources that match the given name exactly.
 * @param {string} [page] Minimum: 1 Maximum: 1024 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [sortBy] The field to sort by. Only one field can be selected for sorting. Default value: TIMECREATED. Allowed values are: TIMECREATED LIFECYCLESTATE
 * @param {string} [sortOrder] The sort order to use (ascending or descending). Default value: ASC. Allowed values are: ASC DESC
 * @param {string} [lifecycleState] Filter returned list by specified lifecycle state. This parameter is case-insensitive.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListTopicsRequest
 */
class ListTopicsRequest {

	constructor(compartmentId, id, name, page, limit, sortBy, sortOrder, lifecycleState, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.id = id;
		this.name = name;
		this.page = page;
		this.limit = limit;
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
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
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
module.exports = ListTopicsRequest;