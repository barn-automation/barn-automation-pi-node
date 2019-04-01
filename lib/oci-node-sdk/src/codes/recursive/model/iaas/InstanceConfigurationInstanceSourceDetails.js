/**
* This resource has one or more subtypes based on the value of the sourceType attribute:
* @param {string} sourceType The source type for the instance. Use image when specifying the image OCID. Use bootVolume when specifying the boot volume OCID. Allowed values are: bootVolume (See {@link InstanceConfigurationInstanceSourceViaBootVolumeDetails}) image (See {@link InstanceConfigurationInstanceSourceViaImageDetails})
* @class InstanceConfigurationInstanceSourceDetails
*/
class InstanceConfigurationInstanceSourceDetails {
	constructor(sourceType){
		this.sourceType = sourceType;
	}
}

module.exports = InstanceConfigurationInstanceSourceDetails;
