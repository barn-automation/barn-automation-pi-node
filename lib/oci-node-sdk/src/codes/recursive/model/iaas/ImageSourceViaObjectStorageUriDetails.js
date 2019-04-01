/**
* 
* @param {string} sourceType The source type for the image. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Required value: objectStorageUri See {@link ImageSourceDetails} for more information.
* @param {string} sourceUri The Object Storage URL for the image.
* @param {string} [sourceImageType] The format of the image to be imported. Only monolithic images are supported. This attribute is not used for exported Oracle images with the OCI image format. Allowed values are: QCOW2 VMDK
* @class ImageSourceViaObjectStorageUriDetails
*/
class ImageSourceViaObjectStorageUriDetails {
	constructor(sourceType, sourceUri, sourceImageType){
		this.sourceType = sourceType;
		this.sourceUri = sourceUri;
		this.sourceImageType = sourceImageType;
	}
}

module.exports = ImageSourceViaObjectStorageUriDetails;
