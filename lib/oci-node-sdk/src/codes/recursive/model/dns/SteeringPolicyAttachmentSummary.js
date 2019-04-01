/**
* An attachment between a steering policy and a domain.
* @param {string} [steeringPolicyId] Minimum: 1 Maximum: 255 The OCID of the attached steering policy.
* @param {string} [zoneId] Minimum: 1 Maximum: 255 The OCID of the attached zone.
* @param {string} [domainName] The attached domain within the attached zone.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the steering policy attachment. Does not have to be unique and can be changed. Avoid entering confidential information.
* @param {Array<string>} [rtypes] The record types covered by the attachment at the domain. The set of record types is determined by aggregating the record types from the answers defined in the steering policy.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment containing the steering policy attachment.
* @param {string} [self] The canonical absolute URL of the resource.
* @param {string} [id] Minimum: 1 Maximum: 255 The OCID of the resource.
* @param {string} [timeCreated] The date and time the resource was created, expressed in RFC 3339 timestamp format. Example: 2016-07-22T17:23:59:60Z
* @param {string} [lifecycleState] The current state of the resource. Allowed values are: CREATING ACTIVE DELETING
* @class SteeringPolicyAttachmentSummary
*/
class SteeringPolicyAttachmentSummary {
	constructor(steeringPolicyId, zoneId, domainName, displayName, rtypes, compartmentId, self, id, timeCreated, lifecycleState){
		this.steeringPolicyId = steeringPolicyId;
		this.zoneId = zoneId;
		this.domainName = domainName;
		this.displayName = displayName;
		this.rtypes = rtypes;
		this.compartmentId = compartmentId;
		this.self = self;
		this.id = id;
		this.timeCreated = timeCreated;
		this.lifecycleState = lifecycleState;
	}
}

module.exports = SteeringPolicyAttachmentSummary;
