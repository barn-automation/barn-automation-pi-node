/**
* Specifies the volumes in a volume group.
* @param {string} type Required value: volumeIds See {@link VolumeGroupSourceDetails} for more information.
* @param {Array<string>} volumeIds OCIDs for the volumes in this volume group.
* @class VolumeGroupSourceFromVolumesDetails
*/
class VolumeGroupSourceFromVolumesDetails {
	constructor(type, volumeIds){
		this.type = type;
		this.volumeIds = volumeIds;
	}
}

module.exports = VolumeGroupSourceFromVolumesDetails;
