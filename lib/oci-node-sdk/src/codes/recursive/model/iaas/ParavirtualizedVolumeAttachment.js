/**
* A paravirtualized volume attachment.
* @param {string} attachmentType Minimum: 1 Maximum: 255 The type of volume attachment. Required value: paravirtualized See {@link VolumeAttachment} for more information.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain of an instance. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the volume attachment.
* @param {string} instanceId Minimum: 1 Maximum: 255 The OCID of the instance the volume is attached to.
* @param {string} lifecycleState The current state of the volume attachment. Allowed values are: ATTACHING ATTACHED DETACHING DETACHED
* @param {string} timeCreated The date and time the volume was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @param {string} volumeId Minimum: 1 Maximum: 255 The OCID of the volume.
* @param {string} [device] Minimum: 3 Maximum: 100 The device name.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information. Example: My volume attachment
* @param {boolean} [isReadOnly] Whether the attachment was created in read-only mode.
* @param {boolean} [isPvEncryptionInTransitEnabled] Whether in-transit encryption for the data volume's paravirtualized attachment is enabled or not.
* @class ParavirtualizedVolumeAttachment
*/
class ParavirtualizedVolumeAttachment {
	constructor(attachmentType, availabilityDomain, compartmentId, id, instanceId, lifecycleState, timeCreated, volumeId, device, displayName, isReadOnly, isPvEncryptionInTransitEnabled){
		this.attachmentType = attachmentType;
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.id = id;
		this.instanceId = instanceId;
		this.lifecycleState = lifecycleState;
		this.timeCreated = timeCreated;
		this.volumeId = volumeId;
		this.device = device;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
		this.isPvEncryptionInTransitEnabled = isPvEncryptionInTransitEnabled;
	}
}

module.exports = ParavirtualizedVolumeAttachment;
