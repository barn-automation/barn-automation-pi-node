/**
* 
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain of the volume group.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment that contains the volume group.
* @param {VolumeGroupSourceDetails} sourceDetails Specifies the volume group source details for a new volume group. The volume source is either another a list of volume ids in the same availability domain, another volume group or a volume group backup.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the volume group. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateVolumeGroupDetails
*/
class CreateVolumeGroupDetails {
	constructor(availabilityDomain, compartmentId, sourceDetails, definedTags, displayName, freeformTags){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.sourceDetails = sourceDetails;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateVolumeGroupDetails;
