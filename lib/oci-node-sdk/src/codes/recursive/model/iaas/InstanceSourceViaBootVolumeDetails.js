/**
* 
* @param {string} sourceType The source type for the instance. Use image when specifying the image OCID. Use bootVolume when specifying the boot volume OCID. Required value: bootVolume See {@link InstanceSourceDetails} for more information.
* @param {string} bootVolumeId Minimum: 1 Maximum: 255 The OCID of the boot volume used to boot the instance.
* @class InstanceSourceViaBootVolumeDetails
*/
class InstanceSourceViaBootVolumeDetails {
	constructor(sourceType, bootVolumeId){
		this.sourceType = sourceType;
		this.bootVolumeId = bootVolumeId;
	}
}

module.exports = InstanceSourceViaBootVolumeDetails;
