/**
* Specifies the source for a volume group.
* @param {string} type Allowed values are: volumeGroupBackupId (See {@link VolumeGroupSourceFromVolumeGroupBackupDetails}) volumeGroupId (See {@link VolumeGroupSourceFromVolumeGroupDetails}) volumeIds (See {@link VolumeGroupSourceFromVolumesDetails})
* @class VolumeGroupSourceDetails
*/
class VolumeGroupSourceDetails {
	constructor(type){
		this.type = type;
	}
}

module.exports = VolumeGroupSourceDetails;
