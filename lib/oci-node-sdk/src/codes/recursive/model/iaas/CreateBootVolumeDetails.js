/**
* 
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain of the boot volume. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment that contains the boot volume.
* @param {BootVolumeSourceDetails} sourceDetails Specifies the boot volume source details for a new boot volume. The volume source is either another boot volume in the same availability domain or a boot volume backup. This is a mandatory field for a boot volume.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {number} [sizeInGBs] The size of the volume in GBs.
* @class CreateBootVolumeDetails
*/
class CreateBootVolumeDetails {
	constructor(availabilityDomain, compartmentId, sourceDetails, definedTags, displayName, freeformTags, sizeInGBs){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.sourceDetails = sourceDetails;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.sizeInGBs = sizeInGBs;
	}
}

module.exports = CreateBootVolumeDetails;
