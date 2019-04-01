/**
 * A class that contains properties necessary to perform ListSnapshots
 * @param {string} fileSystemId Minimum: 1 Maximum: 255 The OCID of the file system.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 500
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [lifecycleState] Filter results by the specified lifecycle state. Must be a valid state for the resource type. Allowed values are: CREATING ACTIVE DELETING DELETED
 * @param {string} [id] Minimum: 1 Maximum: 255 Filter results by OCID. Must be an OCID of the correct type for the resouce type.
 * @param {string} [sortOrder] The sort order to use, either 'asc' or 'desc', where 'asc' is ascending and 'desc' is descending. Allowed values are: ASC DESC
 * @param {string} [opcRequestId] Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListSnapshotsRequest
 */
class ListSnapshotsRequest {

	constructor(fileSystemId, limit, page, lifecycleState, id, sortOrder, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.fileSystemId = fileSystemId;
		this.limit = limit;
		this.page = page;
		this.lifecycleState = lifecycleState;
		this.id = id;
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
		this._queryParams['fileSystemId'] = this.fileSystemId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['id'] = this.id;
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
module.exports = ListSnapshotsRequest;