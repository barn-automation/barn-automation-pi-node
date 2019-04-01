/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} name Minimum: 1 Maximum: 256 The name of the bucket. Valid characters are uppercase or lowercase letters, numbers, and dashes. Bucket names must be unique within an Object Storage namespace. Avoid entering confidential information. example: Example: my-new-bucket1
* @param {string} compartmentId The ID of the compartment in which to create the bucket.
* @param {Object} [metadata] Arbitrary string, up to 4KB, of keys and values for user-defined metadata.
* @param {string} [publicAccessType] The type of public access enabled on this bucket. A bucket is set to NoPublicAccess by default, which only allows an authenticated caller to access the bucket and its contents. When ObjectRead is enabled on the bucket, public access is allowed for the GetObject, HeadObject, and ListObjects operations. When ObjectReadWithoutList is enabled on the bucket, public access is allowed for the GetObject and HeadObject operations. Allowed values are: NoPublicAccess ObjectRead ObjectReadWithoutList
* @param {string} [storageTier] The type of storage tier of this bucket. A bucket is set to 'Standard' tier by default, which means the bucket will be put in the standard storage tier. When 'Archive' tier type is set explicitly, the bucket is put in the Archive Storage tier. The 'storageTier' property is immutable after bucket is created. Allowed values are: Standard Archive
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateBucketDetails
*/
class CreateBucketDetails {
	constructor(name, compartmentId, metadata, publicAccessType, storageTier, freeformTags, definedTags){
		this.name = name;
		this.compartmentId = compartmentId;
		this.metadata = metadata;
		this.publicAccessType = publicAccessType;
		this.storageTier = storageTier;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateBucketDetails;
