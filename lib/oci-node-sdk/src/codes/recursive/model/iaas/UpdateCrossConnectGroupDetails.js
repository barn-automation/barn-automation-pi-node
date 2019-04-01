/**
* 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class UpdateCrossConnectGroupDetails
*/
class UpdateCrossConnectGroupDetails {
	constructor(displayName){
		this.displayName = displayName;
	}
}

module.exports = UpdateCrossConnectGroupDetails;
