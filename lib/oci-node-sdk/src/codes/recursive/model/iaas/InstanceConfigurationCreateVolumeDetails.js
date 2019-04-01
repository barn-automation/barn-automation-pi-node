/**
* Creates a new block volume. Please see CreateVolumeDetails
* @param {string} [availabilityDomain] Minimum: 1 Maximum: 255 The availability domain of the volume. Example: Uocm:PHX-AD-1
* @param {string} [backupPolicyId] Minimum: 1 Maximum: 255 If provided, specifies the ID of the volume backup policy to assign to the newly created volume. If omitted, no policy will be assigned.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment that contains the volume.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {number} [sizeInGBs] The size of the volume in GBs.
* @param {InstanceConfigurationVolumeSourceDetails} [sourceDetails] Specifies the volume source details for a new Block volume. The volume source is either another Block volume in the same availability domain or a Block volume backup. This is an optional field. If not specified or set to null, the new Block volume will be empty. When specified, the new Block volume will contain data from the source volume or backup.
* @class InstanceConfigurationCreateVolumeDetails
*/
class InstanceConfigurationCreateVolumeDetails {
	constructor(availabilityDomain, backupPolicyId, compartmentId, definedTags, displayName, freeformTags, sizeInGBs, sourceDetails){
		this.availabilityDomain = availabilityDomain;
		this.backupPolicyId = backupPolicyId;
		this.compartmentId = compartmentId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.sizeInGBs = sizeInGBs;
		this.sourceDetails = sourceDetails;
	}
}

module.exports = InstanceConfigurationCreateVolumeDetails;
