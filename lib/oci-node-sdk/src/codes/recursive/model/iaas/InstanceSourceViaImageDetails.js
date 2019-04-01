/**
* 
* @param {string} sourceType The source type for the instance. Use image when specifying the image OCID. Use bootVolume when specifying the boot volume OCID. Required value: image See {@link InstanceSourceDetails} for more information.
* @param {string} imageId Minimum: 1 Maximum: 255 The OCID of the image used to boot the instance.
* @param {number} [bootVolumeSizeInGBs] The size of the boot volume in GBs. Minimum value is 50 GB and maximum value is 16384 GB (16TB).
* @param {string} [kmsKeyId] Minimum: 1 Maximum: 255 The OCID of the KMS key to be used as the master encryption key for the boot volume.
* @class InstanceSourceViaImageDetails
*/
class InstanceSourceViaImageDetails {
	constructor(sourceType, imageId, bootVolumeSizeInGBs, kmsKeyId){
		this.sourceType = sourceType;
		this.imageId = imageId;
		this.bootVolumeSizeInGBs = bootVolumeSizeInGBs;
		this.kmsKeyId = kmsKeyId;
	}
}

module.exports = InstanceSourceViaImageDetails;
