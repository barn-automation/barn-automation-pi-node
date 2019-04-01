/**
* Details to create an Oracle Autonomous Database backup.
* @param {string} autonomousDatabaseId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Database backup.
* @param {string} displayName Minimum: 1 Maximum: 255 The user-friendly name for the backup. The name does not have to be unique.
* @class CreateAutonomousDatabaseBackupDetails
*/
class CreateAutonomousDatabaseBackupDetails {
	constructor(autonomousDatabaseId, displayName){
		this.autonomousDatabaseId = autonomousDatabaseId;
		this.displayName = displayName;
	}
}

module.exports = CreateAutonomousDatabaseBackupDetails;
