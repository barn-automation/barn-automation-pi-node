/**
* 
* @param {string} sourceType The source type for the instance. Use image when specifying the image OCID. Use bootVolume when specifying the boot volume OCID. Required value: image See {@link InstanceConfigurationInstanceSourceDetails} for more information.
* @param {string} [imageId] Minimum: 1 Maximum: 255 The OCID of the image used to boot the instance.
* @class InstanceConfigurationInstanceSourceViaImageDetails
*/
class InstanceConfigurationInstanceSourceViaImageDetails {
	constructor(sourceType, imageId){
		this.sourceType = sourceType;
		this.imageId = imageId;
	}
}

module.exports = InstanceConfigurationInstanceSourceViaImageDetails;
