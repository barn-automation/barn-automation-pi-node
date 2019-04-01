/**
* The body for updating a steering policy attachment.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the steering policy attachment. Does not have to be unique and can be changed. Avoid entering confidential information.
* @class UpdateSteeringPolicyAttachmentDetails
*/
class UpdateSteeringPolicyAttachmentDetails {
	constructor(displayName){
		this.displayName = displayName;
	}
}

module.exports = UpdateSteeringPolicyAttachmentDetails;
