/**
 * A class that contains properties necessary to perform GetPublicIpByIpAddress
 * @param {GetPublicIpByIpAddressDetails} getPublicIpByIpAddressDetails An instance of {@link GetPublicIpByIpAddressDetails}
 * @class GetPublicIpByIpAddressRequest
 */
class GetPublicIpByIpAddressRequest {

	constructor(getPublicIpByIpAddressDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = getPublicIpByIpAddressDetails;
		this.getPublicIpByIpAddressDetails = getPublicIpByIpAddressDetails;
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
module.exports = GetPublicIpByIpAddressRequest;