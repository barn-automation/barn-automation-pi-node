/**
* 
* @param {string} destinationType The destination type. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Required value: objectStorageUri See {@link ExportImageDetails} for more information.
* @param {string} destinationUri The Object Storage URL to export the image to. See {@link https://docs.cloud.oracle.com/Content/Compute/Tasks/imageimportexport.htm#URLs|Object Storage URLs} and {@link https://docs.cloud.oracle.com/Content/Object/Tasks/usingpreauthenticatedrequests.htm|Using Pre-Authenticated Requests} for constructing URLs for image import/export.
* @class ExportImageViaObjectStorageUriDetails
*/
class ExportImageViaObjectStorageUriDetails {
	constructor(destinationType, destinationUri){
		this.destinationType = destinationType;
		this.destinationUri = destinationUri;
	}
}

module.exports = ExportImageViaObjectStorageUriDetails;
