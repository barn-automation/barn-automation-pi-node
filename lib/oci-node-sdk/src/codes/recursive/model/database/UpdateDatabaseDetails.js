/**
* Details to update a database.
* @param {DbBackupConfig} [dbBackupConfig] 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class UpdateDatabaseDetails
*/
class UpdateDatabaseDetails {
	constructor(dbBackupConfig, definedTags, freeformTags){
		this.dbBackupConfig = dbBackupConfig;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
	}
}

module.exports = UpdateDatabaseDetails;
