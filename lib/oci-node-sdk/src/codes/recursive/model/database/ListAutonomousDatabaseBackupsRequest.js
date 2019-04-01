/**
 * A class that contains properties necessary to perform ListAutonomousDatabaseBackups
 * @param {string} [autonomousDatabaseId] Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} [compartmentId] Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @param {string} [sortBy] The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. Note: If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. Allowed values are: TIMECREATED DISPLAYNAME
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). Allowed values are: ASC DESC
 * @param {string} [lifecycleState] A filter to return only resources that match the given lifecycle state exactly.
 * @param {string} [displayName] A filter to return only resources that match the entire display name given. The match is not case sensitive.
 * @param {string} [opcRequestId] Unique identifier for the request.
 * @class ListAutonomousDatabaseBackupsRequest
 */
class ListAutonomousDatabaseBackupsRequest {

	constructor(autonomousDatabaseId, compartmentId, limit, page, sortBy, sortOrder, lifecycleState, displayName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autonomousDatabaseId = autonomousDatabaseId;
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.lifecycleState = lifecycleState;
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
		this._queryParams['autonomousDatabaseId'] = this.autonomousDatabaseId;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['lifecycleState'] = this.lifecycleState;
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
module.exports = ListAutonomousDatabaseBackupsRequest;