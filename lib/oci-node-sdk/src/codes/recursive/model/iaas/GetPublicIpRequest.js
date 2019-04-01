/**
 * A class that contains properties necessary to perform GetPublicIp
 * @param {string} publicIpId Minimum: 1 Maximum: 255 The OCID of the public IP.
 * @class GetPublicIpRequest
 */
class GetPublicIpRequest {

	constructor(publicIpId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.publicIpId = publicIpId;
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
		this._pathParams['publicIpId'] = this.publicIpId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPublicIpRequest;