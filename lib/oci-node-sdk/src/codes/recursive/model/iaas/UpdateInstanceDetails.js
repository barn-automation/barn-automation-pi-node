/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. Example: My bare metal instance
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [metadata] Custom metadata key/value string pairs that you provide. Any set of key/value pairs provided here will completely replace the current set of key/value pairs in the 'metadata' field on the instance. Both the 'user_data' and 'ssh_authorized_keys' fields cannot be changed after an instance has launched. Any request which updates, removes, or adds either of these fields will be rejected. You must provide the same values for 'user_data' and 'ssh_authorized_keys' that already exist on the instance.
* @param {Object} [extendedMetadata] Additional metadata key/value pairs that you provide. They serve the same purpose and functionality as fields in the 'metadata' object. They are distinguished from 'metadata' fields in that these can be nested JSON objects (whereas 'metadata' fields are string/string maps only). Both the 'user_data' and 'ssh_authorized_keys' fields cannot be changed after an instance has launched. Any request which updates, removes, or adds either of these fields will be rejected. You must provide the same values for 'user_data' and 'ssh_authorized_keys' that already exist on the instance.
* @class UpdateInstanceDetails
*/
class UpdateInstanceDetails {
	constructor(definedTags, displayName, freeformTags, metadata, extendedMetadata){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.metadata = metadata;
		this.extendedMetadata = extendedMetadata;
	}
}

module.exports = UpdateInstanceDetails;
