/**
 * A class that contains properties necessary to perform ListHttpProbeResults
 * @param {string} probeConfigurationId The OCID of a monitor or on-demand probe.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [startTimeGreaterThanOrEqualTo] Returns results with a startTime equal to or greater than the specified value.
 * @param {number} [startTimeLessThanOrEqualTo] Returns results with a startTime equal to or less than the specified value.
 * @param {string} [sortOrder] Controls the sort order of results. Allowed values are: ASC DESC
 * @param {string} [target] Filters results that match the target.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListHttpProbeResultsRequest
 */
class ListHttpProbeResultsRequest {

	constructor(probeConfigurationId, limit, page, startTimeGreaterThanOrEqualTo, startTimeLessThanOrEqualTo, sortOrder, target, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.probeConfigurationId = probeConfigurationId;
		this.limit = limit;
		this.page = page;
		this.startTimeGreaterThanOrEqualTo = startTimeGreaterThanOrEqualTo;
		this.startTimeLessThanOrEqualTo = startTimeLessThanOrEqualTo;
		this.sortOrder = sortOrder;
		this.target = target;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['startTimeGreaterThanOrEqualTo'] = this.startTimeGreaterThanOrEqualTo;
		this._queryParams['startTimeLessThanOrEqualTo'] = this.startTimeLessThanOrEqualTo;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['target'] = this.target;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['probeConfigurationId'] = this.probeConfigurationId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListHttpProbeResultsRequest;