/**
* Multipart uploads provide efficient and resilient uploads, especially for large objects. Multipart uploads also accommodate objects that are too large for a single upload operation. With multipart uploads, individual parts of an object can be uploaded in parallel to reduce the amount of time you spend uploading. Multipart uploads can also minimize the impact of network failures by letting you retry a failed part upload instead of requiring you to retry an entire object upload. See Using Multipart Uploads.
* @param {string} namespace The Object Storage namespace in which the in-progress multipart upload is stored.
* @param {string} bucket The bucket in which the in-progress multipart upload is stored.
* @param {string} object The object name of the in-progress multipart upload.
* @param {string} uploadId The unique identifier for the in-progress multipart upload.
* @param {string} timeCreated The date and time the upload was created, as described in {@link https://tools.ietf.org/rfc/rfc2616|RFC 2616}, section 14.29.
* @class MultipartUpload
*/
class MultipartUpload {
	constructor(namespace, bucket, object, uploadId, timeCreated){
		this.namespace = namespace;
		this.bucket = bucket;
		this.object = object;
		this.uploadId = uploadId;
		this.timeCreated = timeCreated;
	}
}

module.exports = MultipartUpload;
