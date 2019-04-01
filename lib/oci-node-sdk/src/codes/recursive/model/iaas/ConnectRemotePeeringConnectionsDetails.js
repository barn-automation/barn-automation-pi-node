/**
* Information about the other remote peering connection (RPC).
* @param {string} peerId Minimum: 1 Maximum: 255 The OCID of the RPC you want to peer with.
* @param {string} peerRegionName Minimum: 1 Maximum: 255 The name of the region that contains the RPC you want to peer with. Example: us-ashburn-1
* @class ConnectRemotePeeringConnectionsDetails
*/
class ConnectRemotePeeringConnectionsDetails {
	constructor(peerId, peerRegionName){
		this.peerId = peerId;
		this.peerRegionName = peerRegionName;
	}
}

module.exports = ConnectRemotePeeringConnectionsDetails;
