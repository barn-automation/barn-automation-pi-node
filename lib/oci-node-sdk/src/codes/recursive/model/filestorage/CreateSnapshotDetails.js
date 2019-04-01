/**
* Details for creating the snapshot.
* @param {string} fileSystemId Minimum: 1 Maximum: 255 The OCID of the file system to take a snapshot of.
* @param {string} name Minimum: 1 Maximum: 255 Name of the snapshot. This value is immutable. It must also be unique with respect to all other non-DELETED snapshots on the associated file system. Avoid entering confidential information. Example: Sunday
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateSnapshotDetails
*/
class CreateSnapshotDetails {
	constructor(fileSystemId, name, freeformTags, definedTags){
		this.fileSystemId = fileSystemId;
		this.name = name;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateSnapshotDetails;
