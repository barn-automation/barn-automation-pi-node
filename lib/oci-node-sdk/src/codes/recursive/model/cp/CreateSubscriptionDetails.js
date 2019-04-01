/**
* The configuration details for creating the subscription.
* @param {string} topicId The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the topic for the subscription.
* @param {string} compartmentId The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment for the subscription.
* @param {string} protocol The protocol to use for delivering messages. Valid values: EMAIL, HTTPS.
* @param {string} endpoint The endpoint of the subscription. Valid values depend on the protocol. For EMAIL, only an email address is valid. For HTTPS, only a PagerDuty URL is valid. A URL cannot exceed 512 characters. Avoid entering confidential information.
* @param {string} [metadata] Metadata for the subscription. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateSubscriptionDetails
*/
class CreateSubscriptionDetails {
	constructor(topicId, compartmentId, protocol, endpoint, metadata, freeformTags, definedTags){
		this.topicId = topicId;
		this.compartmentId = compartmentId;
		this.protocol = protocol;
		this.endpoint = endpoint;
		this.metadata = metadata;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateSubscriptionDetails;
