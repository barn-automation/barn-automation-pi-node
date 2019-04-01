/**
 * A class that contains properties necessary to perform ListDatabases
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} dbHomeId Minimum: 1 Maximum: 255 A database home {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @param {string} [sortBy] The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DBNAME is ascending. The DBNAME sort order is case sensitive. Allowed values are: DBNAME TIMECREATED
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). Allowed values are: ASC DESC
 * @param {string} [lifecycleState] A filter to return only resources that match the given lifecycle state exactly.
 * @param {string} [dbName] A filter to return only resources that match the entire database name given. The match is not case sensitive.
 * @class ListDatabasesRequest
 */
class ListDatabasesRequest {

	constructor(compartmentId, dbHomeId, limit, page, sortBy, sortOrder, lifecycleState, dbName){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.dbHomeId = dbHomeId;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.lifecycleState = lifecycleState;
		this.dbName = dbName;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['dbHomeId'] = this.dbHomeId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['dbName'] = this.dbName;
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
module.exports = ListDatabasesRequest;