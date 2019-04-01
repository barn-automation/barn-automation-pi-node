/**
 * A class that contains properties necessary to perform ListEvents
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
 * @param {string} startTime Returns events that were processed at or after this start date and time, expressed in {@link https://tools.ietf.org/html/rfc3339|RFC 3339} timestamp format. For example, a start value of 2017-01-15T11:30:00Z will retrieve a list of all events processed since 30 minutes after the 11th hour of January 15, 2017, in Coordinated Universal Time (UTC). You can specify a value with granularity to the minute. Seconds (and milliseconds, if included) must be set to 0.
 * @param {string} endTime Returns events that were processed before this end date and time, expressed in {@link https://tools.ietf.org/html/rfc3339|RFC 3339} timestamp format. For example, a start value of 2017-01-01T00:00:00Z and an end value of 2017-01-02T00:00:00Z will retrieve a list of all events processed on January 1, 2017. Similarly, a start value of 2017-01-01T00:00:00Z and an end value of 2017-02-01T00:00:00Z will result in a list of all events processed between January 1, 2017 and January 31, 2017. You can specify a value with granularity to the minute. Seconds (and milliseconds, if included) must be set to 0.
 * @param {string} [page] Minimum: 1 Maximum: 1024 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListEventsRequest
 */
class ListEventsRequest {

	constructor(compartmentId, startTime, endTime, page, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.startTime = startTime;
		this.endTime = endTime;
		this.page = page;
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
		this._queryParams['startTime'] = this.startTime;
		this._queryParams['endTime'] = this.endTime;
		this._queryParams['page'] = this.page;
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
module.exports = ListEventsRequest;