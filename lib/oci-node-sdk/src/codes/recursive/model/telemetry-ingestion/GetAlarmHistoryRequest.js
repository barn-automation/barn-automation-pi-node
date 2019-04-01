/**
 * A class that contains properties necessary to perform GetAlarmHistory
 * @param {string} alarmId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of an alarm.
 * @param {string} [alarmHistorytype] The type of history entries to retrieve. State history (STATE_HISTORY) or state transition history (STATE_TRANSITION_HISTORY). If not specified, entries of both types are retrieved. Example: STATE_HISTORY Allowed values are: STATE_HISTORY STATE_TRANSITION_HISTORY
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Default: 1000 Example: 500
 * @param {string} [timestampGreaterThanOrEqualTo] A filter to return only alarm history entries with timestamps occurring on or after the specified date and time. Format defined by RFC3339. Example: 2019-01-01T01:00:00.789Z
 * @param {string} [timestampLessThan] A filter to return only alarm history entries with timestamps occurring before the specified date and time. Format defined by RFC3339. Example: 2019-01-02T01:00:00.789Z
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class GetAlarmHistoryRequest
 */
class GetAlarmHistoryRequest {

	constructor(alarmId, alarmHistorytype, page, limit, timestampGreaterThanOrEqualTo, timestampLessThan, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.alarmId = alarmId;
		this.alarmHistorytype = alarmHistorytype;
		this.page = page;
		this.limit = limit;
		this.timestampGreaterThanOrEqualTo = timestampGreaterThanOrEqualTo;
		this.timestampLessThan = timestampLessThan;
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
		this._queryParams['alarmHistorytype'] = this.alarmHistorytype;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['timestampGreaterThanOrEqualTo'] = this.timestampGreaterThanOrEqualTo;
		this._queryParams['timestampLessThan'] = this.timestampLessThan;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['alarmId'] = this.alarmId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAlarmHistoryRequest;