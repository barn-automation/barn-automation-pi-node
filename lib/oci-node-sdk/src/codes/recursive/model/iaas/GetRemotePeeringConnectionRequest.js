/**
 * A class that contains properties necessary to perform GetRemotePeeringConnection
 * @param {string} remotePeeringConnectionId Minimum: 1 Maximum: 255 The OCID of the remote peering connection (RPC).
 * @class GetRemotePeeringConnectionRequest
 */
class GetRemotePeeringConnectionRequest {

	constructor(remotePeeringConnectionId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.remotePeeringConnectionId = remotePeeringConnectionId;
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
		this._pathParams['remotePeeringConnectionId'] = this.remotePeeringConnectionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetRemotePeeringConnectionRequest;