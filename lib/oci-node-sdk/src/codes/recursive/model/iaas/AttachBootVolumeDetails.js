/**
* 
* @param {string} bootVolumeId Minimum: 1 Maximum: 255 The OCID of the boot volume.
* @param {string} instanceId Minimum: 1 Maximum: 255 The OCID of the instance.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information.
* @class AttachBootVolumeDetails
*/
class AttachBootVolumeDetails {
	constructor(bootVolumeId, instanceId, displayName){
		this.bootVolumeId = bootVolumeId;
		this.instanceId = instanceId;
		this.displayName = displayName;
	}
}

module.exports = AttachBootVolumeDetails;
