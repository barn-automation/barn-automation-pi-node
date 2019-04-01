/**
 * A class that contains properties necessary to perform GetServiceGateway
 * @param {string} serviceGatewayId Minimum: 1 Maximum: 255 The service gateway's {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetServiceGatewayRequest
 */
class GetServiceGatewayRequest {

	constructor(serviceGatewayId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.serviceGatewayId = serviceGatewayId;
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
		this._pathParams['serviceGatewayId'] = this.serviceGatewayId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetServiceGatewayRequest;