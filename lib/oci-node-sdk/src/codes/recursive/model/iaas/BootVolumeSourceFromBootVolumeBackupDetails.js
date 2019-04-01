/**
* Specifies the boot volume backup.
* @param {string} type Required value: bootVolumeBackup See {@link BootVolumeSourceDetails} for more information.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the boot volume backup.
* @class BootVolumeSourceFromBootVolumeBackupDetails
*/
class BootVolumeSourceFromBootVolumeBackupDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = BootVolumeSourceFromBootVolumeBackupDetails;
