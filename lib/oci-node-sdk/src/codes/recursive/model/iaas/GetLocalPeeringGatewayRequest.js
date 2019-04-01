/**
 * A class that contains properties necessary to perform GetLocalPeeringGateway
 * @param {string} localPeeringGatewayId Minimum: 1 Maximum: 255 The OCID of the local peering gateway.
 * @class GetLocalPeeringGatewayRequest
 */
class GetLocalPeeringGatewayRequest {

	constructor(localPeeringGatewayId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.localPeeringGatewayId = localPeeringGatewayId;
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
		this._pathParams['localPeeringGatewayId'] = this.localPeeringGatewayId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetLocalPeeringGatewayRequest;