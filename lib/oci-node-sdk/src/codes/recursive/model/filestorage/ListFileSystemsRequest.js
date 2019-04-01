/**
 * A class that contains properties necessary to perform ListFileSystems
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
 * @param {string} availabilityDomain The name of the availability domain. Example: Uocm:PHX-AD-1
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 500
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. It does not have to be unique, and it is changeable. Example: My resource
 * @param {string} [lifecycleState] Filter results by the specified lifecycle state. Must be a valid state for the resource type. Allowed values are: CREATING ACTIVE DELETING DELETED
 * @param {string} [id] Minimum: 1 Maximum: 255 Filter results by OCID. Must be an OCID of the correct type for the resouce type.
 * @param {string} [sortBy] The field to sort by. You can provide either value, but not both. By default, when you sort by time created, results are shown in descending order. When you sort by display name, results are shown in ascending order. Allowed values are: TIMECREATED DISPLAYNAME
 * @param {string} [sortOrder] The sort order to use, either 'asc' or 'desc', where 'asc' is ascending and 'desc' is descending. Allowed values are: ASC DESC
 * @param {string} [opcRequestId] Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListFileSystemsRequest
 */
class ListFileSystemsRequest {

	constructor(compartmentId, availabilityDomain, limit, page, displayName, lifecycleState, id, sortBy, sortOrder, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.availabilityDomain = availabilityDomain;
		this.limit = limit;
		this.page = page;
		this.displayName = displayName;
		this.lifecycleState = lifecycleState;
		this.id = id;
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
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['displayName'] = this.displayName;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['id'] = this.id;
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
module.exports = ListFileSystemsRequest;