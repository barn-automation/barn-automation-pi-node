/**
* Object used to create a stream.
* @param {string} name Minimum: 1 Maximum: 1024 The name of the stream. Avoid entering confidential information. Example: TelemetryEvents
* @param {number} partitions The number of partitions in the stream.
* @param {string} compartmentId Minimum: 1 Maximum: 1024 The OCID of the compartment that contains the stream.
* @param {number} [retentionInHours] The retention period of the stream, in hours. Accepted values are between 24 and 168 (7 days). If not specified, the stream will have a retention period of 24 hours.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateStreamDetails
*/
class CreateStreamDetails {
	constructor(name, partitions, compartmentId, retentionInHours, freeformTags, definedTags){
		this.name = name;
		this.partitions = partitions;
		this.compartmentId = compartmentId;
		this.retentionInHours = retentionInHours;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateStreamDetails;
