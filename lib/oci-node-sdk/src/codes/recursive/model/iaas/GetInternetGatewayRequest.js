/**
 * A class that contains properties necessary to perform GetInternetGateway
 * @param {string} igId Minimum: 1 Maximum: 255 The OCID of the internet gateway.
 * @class GetInternetGatewayRequest
 */
class GetInternetGatewayRequest {

	constructor(igId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.igId = igId;
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
		this._pathParams['igId'] = this.igId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetInternetGatewayRequest;