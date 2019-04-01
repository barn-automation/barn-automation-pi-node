/**
 * A class that contains properties necessary to perform ListNodePools
 * @param {string} compartmentId The OCID of the compartment.
 * @param {string} [clusterId] The OCID of the cluster.
 * @param {string} [name] The name to filter on.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [sortOrder] The optional order in which to sort the results. Allowed values are: ASC DESC
 * @param {string} [sortBy] The optional field to sort the results by. Allowed values are: ID NAME TIME_CREATED
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListNodePoolsRequest
 */
class ListNodePoolsRequest {

	constructor(compartmentId, clusterId, name, limit, page, sortOrder, sortBy, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.clusterId = clusterId;
		this.name = name;
		this.limit = limit;
		this.page = page;
		this.sortOrder = sortOrder;
		this.sortBy = sortBy;
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
		this._queryParams['clusterId'] = this.clusterId;
		this._queryParams['name'] = this.name;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['sortBy'] = this.sortBy;
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
module.exports = ListNodePoolsRequest;