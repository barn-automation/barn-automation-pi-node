/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} sourceName The name of the source object to be renamed.
* @param {string} newName The new name of the source object.
* @param {string} [srcObjIfMatchETag] The if-match entity tag (ETag) of the source object.
* @param {string} [newObjIfMatchETag] The if-match entity tag (ETag) of the new object.
* @param {string} [newObjIfNoneMatchETag] The if-none-match entity tag (ETag) of the new object.
* @class RenameObjectDetails
*/
class RenameObjectDetails {
	constructor(sourceName, newName, srcObjIfMatchETag, newObjIfMatchETag, newObjIfNoneMatchETag){
		this.sourceName = sourceName;
		this.newName = newName;
		this.srcObjIfMatchETag = srcObjIfMatchETag;
		this.newObjIfMatchETag = newObjIfMatchETag;
		this.newObjIfNoneMatchETag = newObjIfNoneMatchETag;
	}
}

module.exports = RenameObjectDetails;
