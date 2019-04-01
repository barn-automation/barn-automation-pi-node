/**
* 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class UpdateRemotePeeringConnectionDetails
*/
class UpdateRemotePeeringConnectionDetails {
	constructor(displayName){
		this.displayName = displayName;
	}
}

module.exports = UpdateRemotePeeringConnectionDetails;
