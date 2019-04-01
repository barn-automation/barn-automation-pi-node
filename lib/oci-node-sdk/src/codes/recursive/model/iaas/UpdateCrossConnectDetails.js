/**
* Update a CrossConnect
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {boolean} [isActive] Set to true to activate the cross-connect. You activate it after the physical cabling is complete, and you've confirmed the cross-connect's light levels are good and your side of the interface is up. Activation indicates to Oracle that the physical connection is ready. Example: true
* @class UpdateCrossConnectDetails
*/
class UpdateCrossConnectDetails {
	constructor(displayName, isActive){
		this.displayName = displayName;
		this.isActive = isActive;
	}
}

module.exports = UpdateCrossConnectDetails;
