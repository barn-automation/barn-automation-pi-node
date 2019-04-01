/**
 * A class that contains properties necessary to perform CreatePingMonitor
 * @param {CreatePingMonitorDetails} createPingMonitorDetails An instance of {@link CreatePingMonitorDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request that can be retried in case of a timeout or server error without risk of executing the same action again. Retry tokens expire after 24 hours. Note: Retry tokens can be invalidated before the 24 hour time limit due to conflicting operations, such as a resource being deleted or purged from the system.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreatePingMonitorRequest
 */
class CreatePingMonitorRequest {

	constructor(createPingMonitorDetails, opcRetryToken, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createPingMonitorDetails;
		this.createPingMonitorDetails = createPingMonitorDetails;
		this.opcRetryToken = opcRetryToken;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreatePingMonitorRequest;