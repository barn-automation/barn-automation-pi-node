/**
 * A class that contains properties necessary to perform GetNatGateway
 * @param {string} natGatewayId Minimum: 1 Maximum: 255 The NAT gateway's {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetNatGatewayRequest
 */
class GetNatGatewayRequest {

	constructor(natGatewayId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.natGatewayId = natGatewayId;
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
		this._pathParams['natGatewayId'] = this.natGatewayId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetNatGatewayRequest;