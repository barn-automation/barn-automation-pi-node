/**
* Gets summary information about multipart uploads.
* @param {string} etag The current entity tag (ETag) for the part.
* @param {string} md5 The MD5 hash of the bytes of the part.
* @param {number} size The size of the part in bytes.
* @param {number} partNumber The part number for this part.
* @class MultipartUploadPartSummary
*/
class MultipartUploadPartSummary {
	constructor(etag, md5, size, partNumber){
		this.etag = etag;
		this.md5 = md5;
		this.size = size;
		this.partNumber = partNumber;
	}
}

module.exports = MultipartUploadPartSummary;
