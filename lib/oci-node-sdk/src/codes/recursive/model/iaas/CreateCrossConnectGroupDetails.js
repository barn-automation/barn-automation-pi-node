/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the cross-connect group.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class CreateCrossConnectGroupDetails
*/
class CreateCrossConnectGroupDetails {
	constructor(compartmentId, displayName){
		this.compartmentId = compartmentId;
		this.displayName = displayName;
	}
}

module.exports = CreateCrossConnectGroupDetails;
