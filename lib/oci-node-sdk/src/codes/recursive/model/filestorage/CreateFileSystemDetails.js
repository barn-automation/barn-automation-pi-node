/**
* Details for creating the file system.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain to create the file system in. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to create the file system in.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. It does not have to be unique, and it is changeable. Avoid entering confidential information. Example: My file system
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateFileSystemDetails
*/
class CreateFileSystemDetails {
	constructor(availabilityDomain, compartmentId, displayName, freeformTags, definedTags){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateFileSystemDetails;
