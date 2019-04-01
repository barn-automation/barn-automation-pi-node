/**
 * A class that contains properties necessary to perform ListVolumes
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
 * @param {string} [availabilityDomain] The name of the availability domain. Example: Uocm:PHX-AD-1
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 50
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [displayName] Minimum: 1 Maximum: 255 A filter to return only resources that match the given display name exactly.
 * @param {string} [sortBy] The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. Note: In general, some "List" operations (for example, ListInstances) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. Allowed values are: TIMECREATED DISPLAYNAME
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). The DISPLAYNAME sort order is case sensitive. Allowed values are: ASC DESC
 * @param {string} [volumeGroupId] The OCID of the volume group.
 * @param {string} [lifecycleState] A filter to only return resources that match the given lifecycle state. The state value is case-insensitive.
 * @class ListVolumesRequest
 */
class ListVolumesRequest {

	constructor(compartmentId, availabilityDomain, limit, page, displayName, sortBy, sortOrder, volumeGroupId, lifecycleState){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.availabilityDomain = availabilityDomain;
		this.limit = limit;
		this.page = page;
		this.displayName = displayName;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.volumeGroupId = volumeGroupId;
		this.lifecycleState = lifecycleState;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['displayName'] = this.displayName;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['volumeGroupId'] = this.volumeGroupId;
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
module.exports = ListVolumesRequest;