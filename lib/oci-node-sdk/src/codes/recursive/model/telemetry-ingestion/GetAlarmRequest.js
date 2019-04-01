/**
 * A class that contains properties necessary to perform GetAlarm
 * @param {string} alarmId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of an alarm.
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class GetAlarmRequest
 */
class GetAlarmRequest {

	constructor(alarmId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.alarmId = alarmId;
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
module.exports = GetAlarmRequest;