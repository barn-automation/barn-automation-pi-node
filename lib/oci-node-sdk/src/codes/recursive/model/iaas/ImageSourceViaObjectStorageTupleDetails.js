/**
* 
* @param {string} sourceType The source type for the image. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Required value: objectStorageTuple See {@link ImageSourceDetails} for more information.
* @param {string} bucketName The Object Storage bucket for the image.
* @param {string} namespaceName The Object Storage namespace for the image.
* @param {string} objectName The Object Storage name for the image.
* @param {string} [sourceImageType] The format of the image to be imported. Only monolithic images are supported. This attribute is not used for exported Oracle images with the OCI image format. Allowed values are: QCOW2 VMDK
* @class ImageSourceViaObjectStorageTupleDetails
*/
class ImageSourceViaObjectStorageTupleDetails {
	constructor(sourceType, bucketName, namespaceName, objectName, sourceImageType){
		this.sourceType = sourceType;
		this.bucketName = bucketName;
		this.namespaceName = namespaceName;
		this.objectName = objectName;
		this.sourceImageType = sourceImageType;
	}
}

module.exports = ImageSourceViaObjectStorageTupleDetails;
