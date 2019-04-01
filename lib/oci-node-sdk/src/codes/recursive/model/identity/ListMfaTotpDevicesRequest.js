/**
 * A class that contains properties necessary to perform ListMfaTotpDevices
 * @param {string} userId The OCID of the user.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [sortBy] The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive. Note: In general, some "List" operations (for example, ListInstances) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these "List" operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. Allowed values are: TIMECREATED NAME
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). The NAME sort order is case sensitive. Allowed values are: ASC DESC
 * @class ListMfaTotpDevicesRequest
 */
class ListMfaTotpDevicesRequest {

	constructor(userId, page, limit, sortBy, sortOrder){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.userId = userId;
		this.page = page;
		this.limit = limit;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['userId'] = this.userId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListMfaTotpDevicesRequest;