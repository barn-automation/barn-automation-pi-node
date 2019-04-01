/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the cross-connect.
* @param {string} locationName Minimum: 1 Maximum: 255 The name of the FastConnect location where this cross-connect will be installed. To get a list of the available locations, see {@link ListCrossConnectLocations}. Example: CyrusOne, Chandler, AZ
* @param {string} portSpeedShapeName The port speed for this cross-connect. To get a list of the available port speeds, see {@link ListCrossConnectPortSpeedShapes}. Example: 10 Gbps
* @param {string} [crossConnectGroupId] Minimum: 1 Maximum: 255 The OCID of the cross-connect group to put this cross-connect in.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [farCrossConnectOrCrossConnectGroupId] Minimum: 1 Maximum: 255 If you already have an existing cross-connect or cross-connect group at this FastConnect location, and you want this new cross-connect to be on a different router (for the purposes of redundancy), provide the OCID of that existing cross-connect or cross-connect group.
* @param {string} [nearCrossConnectOrCrossConnectGroupId] Minimum: 1 Maximum: 255 If you already have an existing cross-connect or cross-connect group at this FastConnect location, and you want this new cross-connect to be on the same router, provide the OCID of that existing cross-connect or cross-connect group.
* @class CreateCrossConnectDetails
*/
class CreateCrossConnectDetails {
	constructor(compartmentId, locationName, portSpeedShapeName, crossConnectGroupId, displayName, farCrossConnectOrCrossConnectGroupId, nearCrossConnectOrCrossConnectGroupId){
		this.compartmentId = compartmentId;
		this.locationName = locationName;
		this.portSpeedShapeName = portSpeedShapeName;
		this.crossConnectGroupId = crossConnectGroupId;
		this.displayName = displayName;
		this.farCrossConnectOrCrossConnectGroupId = farCrossConnectOrCrossConnectGroupId;
		this.nearCrossConnectOrCrossConnectGroupId = nearCrossConnectOrCrossConnectGroupId;
	}
}

module.exports = CreateCrossConnectDetails;
