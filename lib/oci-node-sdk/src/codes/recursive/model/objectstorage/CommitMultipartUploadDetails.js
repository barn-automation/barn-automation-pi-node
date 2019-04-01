/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {Array<CommitMultipartUploadPartDetails>} partsToCommit The part numbers and entity tags (ETags) for the parts to be committed.
* @param {Array<integer>} [partsToExclude] The part numbers for the parts to be excluded from the completed object. Each part created for this upload must be in either partsToExclude or partsToCommit, but cannot be in both.
* @class CommitMultipartUploadDetails
*/
class CommitMultipartUploadDetails {
	constructor(partsToCommit, partsToExclude){
		this.partsToCommit = partsToCommit;
		this.partsToExclude = partsToExclude;
	}
}

module.exports = CommitMultipartUploadDetails;
