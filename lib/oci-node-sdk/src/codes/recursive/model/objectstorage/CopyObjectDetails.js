/**
* The parameters required by Object Storage to process a request to copy an object to another bucket.
* @param {string} sourceObjectName The name of the object to be copied.
* @param {string} destinationRegion The destination region the object will be copied to, for example "us-ashburn-1".
* @param {string} destinationNamespace The destination Object Storage namespace the object will be copied to.
* @param {string} destinationBucket The destination bucket the object will be copied to.
* @param {string} destinationObjectName The name of the destination object resulting from the copy operation.
* @param {string} [sourceObjectIfMatchETag] The entity tag (ETag) to match against that of the source object. Used to confirm that the source object with a given name is the version of that object storing a specified ETag.
* @param {string} [destinationObjectIfMatchETag] The entity tag (ETag) to match against that of the destination object (an object intended to be overwritten). Used to confirm that the destination object stored under a given name is the version of that object storing a specified entity tag.
* @param {string} [destinationObjectIfNoneMatchETag] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists in the destination bucket.
* @param {Object} [destinationObjectMetadata] Arbitrary string keys and values for the user-defined metadata for the object. Keys must be in "opc-meta-*" format. Avoid entering confidential information. Metadata key-value pairs entered in this field are assigned to the destination object. If you enter no metadata values, the destination object will inherit any existing metadata values associated with the source object.
* @class CopyObjectDetails
*/
class CopyObjectDetails {
	constructor(sourceObjectName, destinationRegion, destinationNamespace, destinationBucket, destinationObjectName, sourceObjectIfMatchETag, destinationObjectIfMatchETag, destinationObjectIfNoneMatchETag, destinationObjectMetadata){
		this.sourceObjectName = sourceObjectName;
		this.destinationRegion = destinationRegion;
		this.destinationNamespace = destinationNamespace;
		this.destinationBucket = destinationBucket;
		this.destinationObjectName = destinationObjectName;
		this.sourceObjectIfMatchETag = sourceObjectIfMatchETag;
		this.destinationObjectIfMatchETag = destinationObjectIfMatchETag;
		this.destinationObjectIfNoneMatchETag = destinationObjectIfNoneMatchETag;
		this.destinationObjectMetadata = destinationObjectMetadata;
	}
}

module.exports = CopyObjectDetails;
