/**
 * A class that contains properties necessary to perform CreateAlarm
 * @param {CreateAlarmDetails} createAlarmDetails An instance of {@link CreateAlarmDetails}
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected.
 * @class CreateAlarmRequest
 */
class CreateAlarmRequest {

	constructor(createAlarmDetails, opcRequestId, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createAlarmDetails;
		this.createAlarmDetails = createAlarmDetails;
		this.opcRequestId = opcRequestId;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
module.exports = CreateAlarmRequest;