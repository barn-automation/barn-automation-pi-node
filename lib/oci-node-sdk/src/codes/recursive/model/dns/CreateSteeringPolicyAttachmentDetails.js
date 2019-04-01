/**
* The body for defining an attachment between a steering policy and a domain.
* @param {string} steeringPolicyId Minimum: 1 Maximum: 255 The OCID of the attached steering policy.
* @param {string} zoneId Minimum: 1 Maximum: 255 The OCID of the attached zone.
* @param {string} domainName The attached domain within the attached zone.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the steering policy attachment. Does not have to be unique and can be changed. Avoid entering confidential information.
* @class CreateSteeringPolicyAttachmentDetails
*/
class CreateSteeringPolicyAttachmentDetails {
	constructor(steeringPolicyId, zoneId, domainName, displayName){
		this.steeringPolicyId = steeringPolicyId;
		this.zoneId = zoneId;
		this.domainName = domainName;
		this.displayName = displayName;
	}
}

module.exports = CreateSteeringPolicyAttachmentDetails;
