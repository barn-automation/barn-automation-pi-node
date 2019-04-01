/**
 * A class that contains properties necessary to perform GetIPSecConnectionDeviceStatus
 * @param {string} ipscId Minimum: 1 Maximum: 255 The OCID of the IPSec connection.
 * @class GetIPSecConnectionDeviceStatusRequest
 */
class GetIPSecConnectionDeviceStatusRequest {

	constructor(ipscId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.ipscId = ipscId;
	}

	get headers(){
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
		this._pathParams['ipscId'] = this.ipscId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetIPSecConnectionDeviceStatusRequest;