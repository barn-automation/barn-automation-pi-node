/**
* Specifies the source volume.
* @param {string} type Required value: volume See {@link VolumeSourceDetails} for more information.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the volume.
* @class VolumeSourceFromVolumeDetails
*/
class VolumeSourceFromVolumeDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = VolumeSourceFromVolumeDetails;
