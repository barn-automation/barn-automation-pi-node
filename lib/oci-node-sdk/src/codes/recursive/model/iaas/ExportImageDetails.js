/**
* The destination details for the image export.
* @param {string} destinationType The destination type. Use objectStorageTuple when specifying the namespace, bucket name, and object name. Use objectStorageUri when specifying the Object Storage URL. Allowed values are: objectStorageTuple (See {@link ExportImageViaObjectStorageTupleDetails}) objectStorageUri (See {@link ExportImageViaObjectStorageUriDetails})
* @class ExportImageDetails
*/
class ExportImageDetails {
	constructor(destinationType){
		this.destinationType = destinationType;
	}
}

module.exports = ExportImageDetails;
