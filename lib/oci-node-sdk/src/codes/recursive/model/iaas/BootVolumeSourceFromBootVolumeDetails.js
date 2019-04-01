/**
* Specifies the source boot volume.
* @param {string} type Required value: bootVolume See {@link BootVolumeSourceDetails} for more information.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the boot volume.
* @class BootVolumeSourceFromBootVolumeDetails
*/
class BootVolumeSourceFromBootVolumeDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = BootVolumeSourceFromBootVolumeDetails;
