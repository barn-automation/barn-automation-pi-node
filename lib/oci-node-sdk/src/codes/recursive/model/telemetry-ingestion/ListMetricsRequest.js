/**
 * A class that contains properties necessary to perform ListMetrics
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the resources monitored by the metric that you are searching for. Use tenancyId to search in the root compartment.
 * @param {ListMetricsDetails} listMetricsDetails An instance of {@link ListMetricsDetails}
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Default: 1000 Example: 500
 * @param {boolean} [compartmentIdInSubtree] When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false.
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class ListMetricsRequest
 */
class ListMetricsRequest {

	constructor(compartmentId, listMetricsDetails, page, limit, compartmentIdInSubtree, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = listMetricsDetails;
		this.compartmentId = compartmentId;
		this.listMetricsDetails = listMetricsDetails;
		this.page = page;
		this.limit = limit;
		this.compartmentIdInSubtree = compartmentIdInSubtree;
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
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['compartmentIdInSubtree'] = this.compartmentIdInSubtree;
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
module.exports = ListMetricsRequest;