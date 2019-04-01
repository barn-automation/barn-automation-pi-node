/**
 * A class that contains properties necessary to perform UpdateAlarm
 * @param {string} alarmId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of an alarm.
 * @param {UpdateAlarmDetails} updateAlarmDetails An instance of {@link UpdateAlarmDetails}
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class UpdateAlarmRequest
 */
class UpdateAlarmRequest {

	constructor(alarmId, updateAlarmDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateAlarmDetails;
		this.alarmId = alarmId;
		this.updateAlarmDetails = updateAlarmDetails;
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
module.exports = UpdateAlarmRequest;