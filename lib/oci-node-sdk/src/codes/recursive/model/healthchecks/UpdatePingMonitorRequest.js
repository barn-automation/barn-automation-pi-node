/**
 * A class that contains properties necessary to perform UpdatePingMonitor
 * @param {string} monitorId The OCID of a monitor.
 * @param {UpdatePingMonitorDetails} updatePingMonitorDetails An instance of {@link UpdatePingMonitorDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class UpdatePingMonitorRequest
 */
class UpdatePingMonitorRequest {

	constructor(monitorId, updatePingMonitorDetails, ifMatch, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updatePingMonitorDetails;
		this.monitorId = monitorId;
		this.updatePingMonitorDetails = updatePingMonitorDetails;
		this.ifMatch = ifMatch;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = UpdatePingMonitorRequest;