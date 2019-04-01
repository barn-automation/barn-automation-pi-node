/**
* Specifies the volume backup.
* @param {string} type Required value: volumeBackup See {@link InstanceConfigurationVolumeSourceDetails} for more information.
* @param {string} [id] Minimum: 1 Maximum: 255 The OCID of the volume backup.
* @class InstanceConfigurationVolumeSourceFromVolumeBackupDetails
*/
class InstanceConfigurationVolumeSourceFromVolumeBackupDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = InstanceConfigurationVolumeSourceFromVolumeBackupDetails;
