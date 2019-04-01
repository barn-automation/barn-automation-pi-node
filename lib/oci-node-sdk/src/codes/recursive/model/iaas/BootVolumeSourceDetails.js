/**
* This resource has one or more subtypes based on the value of the type attribute:
* @param {string} type Allowed values are: bootVolumeBackup (See {@link BootVolumeSourceFromBootVolumeBackupDetails}) bootVolume (See {@link BootVolumeSourceFromBootVolumeDetails})
* @class BootVolumeSourceDetails
*/
class BootVolumeSourceDetails {
	constructor(type){
		this.type = type;
	}
}

module.exports = BootVolumeSourceDetails;
