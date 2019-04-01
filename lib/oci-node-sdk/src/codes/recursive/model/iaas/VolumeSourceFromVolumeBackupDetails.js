/**
* Specifies the volume backup.
* @param {string} type Required value: volumeBackup See {@link VolumeSourceDetails} for more information.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the volume backup.
* @class VolumeSourceFromVolumeBackupDetails
*/
class VolumeSourceFromVolumeBackupDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = VolumeSourceFromVolumeBackupDetails;
