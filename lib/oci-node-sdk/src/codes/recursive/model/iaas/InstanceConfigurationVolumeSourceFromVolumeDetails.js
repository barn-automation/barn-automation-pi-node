/**
* Specifies the source volume.
* @param {string} type Required value: volume See {@link InstanceConfigurationVolumeSourceDetails} for more information.
* @param {string} [id] Minimum: 1 Maximum: 255 The OCID of the volume.
* @class InstanceConfigurationVolumeSourceFromVolumeDetails
*/
class InstanceConfigurationVolumeSourceFromVolumeDetails {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = InstanceConfigurationVolumeSourceFromVolumeDetails;
