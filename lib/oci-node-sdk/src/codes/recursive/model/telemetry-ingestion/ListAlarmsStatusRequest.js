/**
 * A class that contains properties necessary to perform ListAlarmsStatus
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the resources monitored by the metric that you are searching for. Use tenancyId to search in the root compartment.
 * @param {boolean} [compartmentIdInSubtree] When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false.
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Default: 1000 Example: 500
 * @param {string} [displayName] Minimum: 1 Maximum: 255 A filter to return only resources that match the given display name exactly. Use this filter to list an alarm by name. Alternatively, when you know the alarm OCID, use the GetAlarm operation.
 * @param {string} [sortBy] The field to use when sorting returned alarm definitions. Only one sorting level is provided. Example: severity Allowed values are: displayName severity
 * @param {string} [sortOrder] The sort order to use when sorting returned alarm definitions. Ascending (ASC) or descending (DESC). Example: ASC Allowed values are: ASC DESC
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class ListAlarmsStatusRequest
 */
class ListAlarmsStatusRequest {

	constructor(compartmentId, compartmentIdInSubtree, page, limit, displayName, sortBy, sortOrder, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.compartmentIdInSubtree = compartmentIdInSubtree;
		this.page = page;
		this.limit = limit;
		this.displayName = displayName;
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
		this._queryParams['compartmentIdInSubtree'] = this.compartmentIdInSubtree;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['displayName'] = this.displayName;
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
module.exports = ListAlarmsStatusRequest;