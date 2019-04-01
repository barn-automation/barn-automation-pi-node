/**
* Details for creating a database home if you are creating a database by restoring from a database backup.
* @param {CreateDatabaseFromBackupDetails} database 
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-provided name of the database home.
* @class CreateDbHomeFromBackupDetails
*/
class CreateDbHomeFromBackupDetails {
	constructor(database, displayName){
		this.database = database;
		this.displayName = displayName;
	}
}

module.exports = CreateDbHomeFromBackupDetails;
