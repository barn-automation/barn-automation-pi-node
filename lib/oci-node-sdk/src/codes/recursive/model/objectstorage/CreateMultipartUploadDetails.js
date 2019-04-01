/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} object The name of the object to which this multi-part upload is targeted. Avoid entering confidential information. Example: test/object1.log
* @param {string} [contentType] The content type of the object to upload.
* @param {string} [contentLanguage] The content language of the object to upload.
* @param {string} [contentEncoding] The content encoding of the object to upload.
* @param {Object} [metadata] Arbitrary string keys and values for the user-defined metadata for the object. Keys must be in "opc-meta-*" format. Avoid entering confidential information.
* @class CreateMultipartUploadDetails
*/
class CreateMultipartUploadDetails {
	constructor(object, contentType, contentLanguage, contentEncoding, metadata){
		this.object = object;
		this.contentType = contentType;
		this.contentLanguage = contentLanguage;
		this.contentEncoding = contentEncoding;
		this.metadata = metadata;
	}
}

module.exports = CreateMultipartUploadDetails;
