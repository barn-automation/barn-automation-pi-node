/**
* 
* @param {string} bootVolumeId Minimum: 1 Maximum: 255 The OCID of the boot volume that needs to be backed up.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the boot volume backup. Does not have to be unique and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [type] The type of backup to create. If omitted, defaults to incremental. Allowed values are: FULL INCREMENTAL
* @class CreateBootVolumeBackupDetails
*/
class CreateBootVolumeBackupDetails {
	constructor(bootVolumeId, definedTags, displayName, freeformTags, type){
		this.bootVolumeId = bootVolumeId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.type = type;
	}
}

module.exports = CreateBootVolumeBackupDetails;
