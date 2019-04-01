/**
 * A class that contains properties necessary to perform GetPingMonitor
 * @param {string} monitorId The OCID of a monitor.
 * @param {string} [ifNoneMatch] The If-None-Match header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is *, or having a selected representation with an entity-tag that does not match any of those listed in the field-value.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetPingMonitorRequest
 */
class GetPingMonitorRequest {

	constructor(monitorId, ifNoneMatch, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.monitorId = monitorId;
		this.ifNoneMatch = ifNoneMatch;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['monitorId'] = this.monitorId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPingMonitorRequest;