/**
* Specifies the volume group backup to restore from.
* @param {string} type Required value: volumeGroupBackupId See {@link VolumeGroupSourceDetails} for more information.
* @param {string} volumeGroupBackupId Minimum: 1 Maximum: 255 The OCID of the volume group backup to restore from.
* @class VolumeGroupSourceFromVolumeGroupBackupDetails
*/
class VolumeGroupSourceFromVolumeGroupBackupDetails {
	constructor(type, volumeGroupBackupId){
		this.type = type;
		this.volumeGroupBackupId = volumeGroupBackupId;
	}
}

module.exports = VolumeGroupSourceFromVolumeGroupBackupDetails;
