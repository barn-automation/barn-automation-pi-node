/**
* Specifies the volume group to clone from.
* @param {string} type Required value: volumeGroupId See {@link VolumeGroupSourceDetails} for more information.
* @param {string} volumeGroupId Minimum: 1 Maximum: 255 The OCID of the volume group to clone from.
* @class VolumeGroupSourceFromVolumeGroupDetails
*/
class VolumeGroupSourceFromVolumeGroupDetails {
	constructor(type, volumeGroupId){
		this.type = type;
		this.volumeGroupId = volumeGroupId;
	}
}

module.exports = VolumeGroupSourceFromVolumeGroupDetails;
