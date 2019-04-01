/**
* This resource has one or more subtypes based on the value of the sourceType attribute:
* @param {string} sourceType The source type for the image. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Allowed values are: objectStorageTuple (See {@link ImageSourceViaObjectStorageTupleDetails}) objectStorageUri (See {@link ImageSourceViaObjectStorageUriDetails})
* @param {string} [sourceImageType] The format of the image to be imported. Only monolithic images are supported. This attribute is not used for exported Oracle images with the OCI image format. Allowed values are: QCOW2 VMDK
* @class ImageSourceDetails
*/
class ImageSourceDetails {
	constructor(sourceType, sourceImageType){
		this.sourceType = sourceType;
		this.sourceImageType = sourceImageType;
	}
}

module.exports = ImageSourceDetails;
