/**
* 
* @param {string} instanceId Minimum: 1 Maximum: 255 The OCID of the instance.
* @param {string} type Minimum: 1 Maximum: 255 The type of volume. The only supported value are "iscsi" and "paravirtualized". Required value: paravirtualized See {@link AttachVolumeDetails} for more information.
* @param {string} volumeId Minimum: 1 Maximum: 255 The OCID of the volume.
* @param {string} [device] Minimum: 3 Maximum: 100 The device name.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information.
* @param {boolean} [isReadOnly] Whether the attachment was created in read-only mode.
* @param {boolean} [isPvEncryptionInTransitEnabled] Whether to enable in-transit encryption for the data volume's paravirtualized attachment. The default value is false.
* @class AttachParavirtualizedVolumeDetails
*/
class AttachParavirtualizedVolumeDetails {
	constructor(instanceId, type, volumeId, device, displayName, isReadOnly, isPvEncryptionInTransitEnabled){
		this.instanceId = instanceId;
		this.type = type;
		this.volumeId = volumeId;
		this.device = device;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
		this.isPvEncryptionInTransitEnabled = isPvEncryptionInTransitEnabled;
	}
}

module.exports = AttachParavirtualizedVolumeDetails;
