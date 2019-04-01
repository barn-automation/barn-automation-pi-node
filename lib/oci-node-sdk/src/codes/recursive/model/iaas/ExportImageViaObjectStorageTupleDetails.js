/**
* 
* @param {string} destinationType The destination type. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Required value: objectStorageTuple See {@link ExportImageDetails} for more information.
* @param {string} bucketName The Object Storage bucket to export the image to.
* @param {string} namespaceName The Object Storage namespace to export the image to.
* @param {string} objectName The Object Storage object name for the exported image.
* @class ExportImageViaObjectStorageTupleDetails
*/
class ExportImageViaObjectStorageTupleDetails {
	constructor(destinationType, bucketName, namespaceName, objectName){
		this.destinationType = destinationType;
		this.bucketName = bucketName;
		this.namespaceName = namespaceName;
		this.objectName = objectName;
	}
}

module.exports = ExportImageViaObjectStorageTupleDetails;
