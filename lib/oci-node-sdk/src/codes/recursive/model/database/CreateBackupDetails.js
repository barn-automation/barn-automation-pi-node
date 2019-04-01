/**
* Details for creating a database backup.
* @param {string} databaseId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database.
* @param {string} displayName Minimum: 1 Maximum: 255 The user-friendly name for the backup. The name does not have to be unique.
* @class CreateBackupDetails
*/
class CreateBackupDetails {
	constructor(databaseId, displayName){
		this.databaseId = databaseId;
		this.displayName = displayName;
	}
}

module.exports = CreateBackupDetails;
