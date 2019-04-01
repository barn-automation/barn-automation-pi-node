/**
 * A class that contains properties necessary to perform ListDbSystems
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @param {string} [backupId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the backup. Specify a backupId to list only the DB systems that support creating a database using this backup in this compartment.
 * @param {string} [sortBy] The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. Note: If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. Allowed values are: TIMECREATED DISPLAYNAME
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). Allowed values are: ASC DESC
 * @param {string} [lifecycleState] A filter to return only resources that match the given lifecycle state exactly.
 * @param {string} [availabilityDomain] A filter to return only resources that match the given availability domain exactly.
 * @param {string} [displayName] A filter to return only resources that match the entire display name given. The match is not case sensitive.
 * @class ListDbSystemsRequest
 */
class ListDbSystemsRequest {

	constructor(compartmentId, limit, page, backupId, sortBy, sortOrder, lifecycleState, availabilityDomain, displayName){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.backupId = backupId;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.lifecycleState = lifecycleState;
		this.availabilityDomain = availabilityDomain;
		this.displayName = displayName;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['backupId'] = this.backupId;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
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
module.exports = ListDbSystemsRequest;