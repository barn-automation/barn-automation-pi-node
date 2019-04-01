/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the RPC.
* @param {string} drgId Minimum: 1 Maximum: 255 The OCID of the DRG the RPC belongs to.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @class CreateRemotePeeringConnectionDetails
*/
class CreateRemotePeeringConnectionDetails {
	constructor(compartmentId, drgId, displayName){
		this.compartmentId = compartmentId;
		this.drgId = drgId;
		this.displayName = displayName;
	}
}

module.exports = CreateRemotePeeringConnectionDetails;
