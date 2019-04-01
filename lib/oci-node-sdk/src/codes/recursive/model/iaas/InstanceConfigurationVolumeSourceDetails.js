/**
* This resource has one or more subtypes based on the value of the type attribute:
* @param {string} type Allowed values are: volumeBackup (See {@link InstanceConfigurationVolumeSourceFromVolumeBackupDetails}) volume (See {@link InstanceConfigurationVolumeSourceFromVolumeDetails})
* @class InstanceConfigurationVolumeSourceDetails
*/
class InstanceConfigurationVolumeSourceDetails {
	constructor(type){
		this.type = type;
	}
}

module.exports = InstanceConfigurationVolumeSourceDetails;
