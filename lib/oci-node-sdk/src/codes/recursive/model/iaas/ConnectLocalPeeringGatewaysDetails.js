/**
* Information about the other local peering gateway (LPG).
* @param {string} peerId Minimum: 1 Maximum: 255 The OCID of the LPG you want to peer with.
* @class ConnectLocalPeeringGatewaysDetails
*/
class ConnectLocalPeeringGatewaysDetails {
	constructor(peerId){
		this.peerId = peerId;
	}
}

module.exports = ConnectLocalPeeringGatewaysDetails;
