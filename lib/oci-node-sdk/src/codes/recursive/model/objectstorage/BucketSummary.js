/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} namespace The Object Storage namespace in which the bucket lives.
* @param {string} name The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
* @param {string} compartmentId The compartment ID in which the bucket is authorized.
* @param {string} createdBy The OCID of the user who created the bucket.
* @param {string} timeCreated The date and time the bucket was created, as described in {@link https://tools.ietf.org/rfc/rfc2616|RFC 2616}, section 14.29.
* @param {string} etag The entity tag (ETag) for the bucket.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class BucketSummary
*/
class BucketSummary {
	constructor(namespace, name, compartmentId, createdBy, timeCreated, etag, freeformTags, definedTags){
		this.namespace = namespace;
		this.name = name;
		this.compartmentId = compartmentId;
		this.createdBy = createdBy;
		this.timeCreated = timeCreated;
		this.etag = etag;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = BucketSummary;
