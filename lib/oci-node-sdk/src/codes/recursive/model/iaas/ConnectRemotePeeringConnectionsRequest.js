/**
 * A class that contains properties necessary to perform ConnectRemotePeeringConnections
 * @param {string} remotePeeringConnectionId Minimum: 1 Maximum: 255 The OCID of the remote peering connection (RPC).
 * @param {ConnectRemotePeeringConnectionsDetails} connectRemotePeeringConnectionsDetails An instance of {@link ConnectRemotePeeringConnectionsDetails}
 * @class ConnectRemotePeeringConnectionsRequest
 */
class ConnectRemotePeeringConnectionsRequest {

	constructor(remotePeeringConnectionId, connectRemotePeeringConnectionsDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = connectRemotePeeringConnectionsDetails;
		this.remotePeeringConnectionId = remotePeeringConnectionId;
		this.connectRemotePeeringConnectionsDetails = connectRemotePeeringConnectionsDetails;
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
module.exports = ConnectRemotePeeringConnectionsRequest;