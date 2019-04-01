/**
* This resource has one or more subtypes based on the value of the type attribute:
* @param {string} type Allowed values are: volumeBackup (See {@link VolumeSourceFromVolumeBackupDetails}) volume (See {@link VolumeSourceFromVolumeDetails})
* @class VolumeSourceDetails
*/
class VolumeSourceDetails {
	constructor(type){
		this.type = type;
	}
}

module.exports = VolumeSourceDetails;
