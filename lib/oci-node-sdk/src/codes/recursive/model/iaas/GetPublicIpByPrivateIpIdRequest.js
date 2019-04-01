/**
 * A class that contains properties necessary to perform GetPublicIpByPrivateIpId
 * @param {GetPublicIpByPrivateIpIdDetails} getPublicIpByPrivateIpIdDetails An instance of {@link GetPublicIpByPrivateIpIdDetails}
 * @class GetPublicIpByPrivateIpIdRequest
 */
class GetPublicIpByPrivateIpIdRequest {

	constructor(getPublicIpByPrivateIpIdDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = getPublicIpByPrivateIpIdDetails;
		this.getPublicIpByPrivateIpIdDetails = getPublicIpByPrivateIpIdDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPublicIpByPrivateIpIdRequest;