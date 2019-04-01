/**
* 
* @param {string} instanceId Minimum: 1 Maximum: 255 The OCID of the instance.
* @param {string} type Minimum: 1 Maximum: 255 The type of volume. The only supported value are "iscsi" and "paravirtualized". Required value: iscsi See {@link AttachVolumeDetails} for more information.
* @param {string} volumeId Minimum: 1 Maximum: 255 The OCID of the volume.
* @param {string} [device] Minimum: 3 Maximum: 100 The device name.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information.
* @param {boolean} [isReadOnly] Whether the attachment was created in read-only mode.
* @param {boolean} [useChap] Whether to use CHAP authentication for the volume attachment. Defaults to false.
* @class AttachIScsiVolumeDetails
*/
class AttachIScsiVolumeDetails {
	constructor(instanceId, type, volumeId, device, displayName, isReadOnly, useChap){
		this.instanceId = instanceId;
		this.type = type;
		this.volumeId = volumeId;
		this.device = device;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
		this.useChap = useChap;
	}
}

module.exports = AttachIScsiVolumeDetails;
