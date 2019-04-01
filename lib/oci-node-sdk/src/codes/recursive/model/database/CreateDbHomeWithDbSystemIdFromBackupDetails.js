/**
* 
* @param {string} dbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {CreateDatabaseFromBackupDetails} database 
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-provided name of the database home.
* @param {string} [source] The source of database: NONE for creating a new database. DB_BACKUP for creating a new database by restoring from a database backup. Required value: DB_BACKUP See {@link CreateDbHomeWithDbSystemIdBase} for more information.
* @class CreateDbHomeWithDbSystemIdFromBackupDetails
*/
class CreateDbHomeWithDbSystemIdFromBackupDetails {
	constructor(dbSystemId, database, displayName, source){
		this.dbSystemId = dbSystemId;
		this.database = database;
		this.displayName = displayName;
		this.source = source;
	}
}

module.exports = CreateDbHomeWithDbSystemIdFromBackupDetails;
