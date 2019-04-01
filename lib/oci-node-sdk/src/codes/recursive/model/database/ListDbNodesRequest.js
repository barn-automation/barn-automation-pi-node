/**
 * A class that contains properties necessary to perform ListDbNodes
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} dbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @param {string} [sortBy] Sort by TIMECREATED. Default order for TIMECREATED is descending. Allowed values are: TIMECREATED
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). Allowed values are: ASC DESC
 * @param {string} [lifecycleState] A filter to return only resources that match the given lifecycle state exactly.
 * @class ListDbNodesRequest
 */
class ListDbNodesRequest {

	constructor(compartmentId, dbSystemId, limit, page, sortBy, sortOrder, lifecycleState){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.dbSystemId = dbSystemId;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.lifecycleState = lifecycleState;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['dbSystemId'] = this.dbSystemId;
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
module.exports = ListDbNodesRequest;