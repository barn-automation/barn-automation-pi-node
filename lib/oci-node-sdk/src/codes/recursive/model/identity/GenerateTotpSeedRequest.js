/**
 * A class that contains properties necessary to perform GenerateTotpSeed
 * @param {string} userId The OCID of the user.
 * @param {string} mfaTotpDeviceId The OCID of the MFA TOTP device.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class GenerateTotpSeedRequest
 */
class GenerateTotpSeedRequest {

	constructor(userId, mfaTotpDeviceId, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.userId = userId;
		this.mfaTotpDeviceId = mfaTotpDeviceId;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = GenerateTotpSeedRequest;