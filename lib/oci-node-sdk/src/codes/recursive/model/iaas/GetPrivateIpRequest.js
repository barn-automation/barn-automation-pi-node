/**
 * A class that contains properties necessary to perform GetPrivateIp
 * @param {string} privateIpId Minimum: 1 Maximum: 255 The OCID of the private IP.
 * @class GetPrivateIpRequest
 */
class GetPrivateIpRequest {

	constructor(privateIpId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.privateIpId = privateIpId;
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
		this._pathParams['privateIpId'] = this.privateIpId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPrivateIpRequest;