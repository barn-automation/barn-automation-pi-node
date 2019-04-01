/**
 * A class that contains properties necessary to perform GetJobLogs
 * @param {string} jobId The job OCID.
 * @param {Array} [type] A filter that returns only logs of a specified type.
 * @param {string} [levelGreaterThanOrEqualTo] A filter that returns only log entries that match a given severity level or greater.
 * @param {string} [sortOrder] The sort order, either ASC (ascending) or DESC (descending). Allowed values are: ASC DESC
 * @param {number} [limit] The number of items returned in a paginated List call. For information about pagination, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the preceding List call. For information about pagination, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [timestampGreaterThanOrEqualTo] Time stamp specifying the lower time limit for which logs are returned in a query.
 * @param {string} [timestampLessThanOrEqualTo] Time stamp specifying the upper time limit for which logs are returned in a query.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetJobLogsRequest
 */
class GetJobLogsRequest {

	constructor(jobId, type, levelGreaterThanOrEqualTo, sortOrder, limit, page, timestampGreaterThanOrEqualTo, timestampLessThanOrEqualTo, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.jobId = jobId;
		this.type = type;
		this.levelGreaterThanOrEqualTo = levelGreaterThanOrEqualTo;
		this.sortOrder = sortOrder;
		this.limit = limit;
		this.page = page;
		this.timestampGreaterThanOrEqualTo = timestampGreaterThanOrEqualTo;
		this.timestampLessThanOrEqualTo = timestampLessThanOrEqualTo;
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
		this._queryParams['type'] = this.type;
		this._queryParams['levelGreaterThanOrEqualTo'] = this.levelGreaterThanOrEqualTo;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['timestampGreaterThanOrEqualTo'] = this.timestampGreaterThanOrEqualTo;
		this._queryParams['timestampLessThanOrEqualTo'] = this.timestampLessThanOrEqualTo;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['jobId'] = this.jobId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetJobLogsRequest;