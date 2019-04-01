/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {number} partNum The part number for this part.
* @param {string} etag The entity tag (ETag) returned when this part was uploaded.
* @class CommitMultipartUploadPartDetails
*/
class CommitMultipartUploadPartDetails {
	constructor(partNum, etag){
		this.partNum = partNum;
		this.etag = etag;
	}
}

module.exports = CommitMultipartUploadPartDetails;
