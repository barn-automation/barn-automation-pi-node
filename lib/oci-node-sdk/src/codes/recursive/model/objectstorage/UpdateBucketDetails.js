/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} [namespace] The Object Storage namespace in which the bucket lives.
* @param {string} [compartmentId] The compartmentId for the compartment to which the bucket is targeted to move to.
* @param {string} [name] The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
* @param {Object} [metadata] Arbitrary string, up to 4KB, of keys and values for user-defined metadata.
* @param {string} [publicAccessType] The type of public access enabled on this bucket. A bucket is set to NoPublicAccess by default, which only allows an authenticated caller to access the bucket and its contents. When ObjectRead is enabled on the bucket, public access is allowed for the GetObject, HeadObject, and ListObjects operations. When ObjectReadWithoutList is enabled on the bucket, public access is allowed for the GetObject and HeadObject operations. Allowed values are: NoPublicAccess ObjectRead ObjectReadWithoutList
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: `{"Operations": {"CostCenter": "42"}}
* @class UpdateBucketDetails
*/
class UpdateBucketDetails {
	constructor(namespace, compartmentId, name, metadata, publicAccessType, freeformTags, definedTags){
		this.namespace = namespace;
		this.compartmentId = compartmentId;
		this.name = name;
		this.metadata = metadata;
		this.publicAccessType = publicAccessType;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateBucketDetails;
