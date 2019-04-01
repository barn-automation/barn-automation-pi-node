/**
 * A class that contains properties necessary to perform GetMfaTotpDevice
 * @param {string} userId The OCID of the user.
 * @param {string} mfaTotpDeviceId The OCID of the MFA TOTP device.
 * @class GetMfaTotpDeviceRequest
 */
class GetMfaTotpDeviceRequest {

	constructor(userId, mfaTotpDeviceId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.userId = userId;
		this.mfaTotpDeviceId = mfaTotpDeviceId;
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
		this._pathParams['userId'] = this.userId;
		this._pathParams['mfaTotpDeviceId'] = this.mfaTotpDeviceId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetMfaTotpDeviceRequest;