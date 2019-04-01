/**
* 
* @param {string} dbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {CreateDatabaseDetails} database 
* @param {string} dbVersion A valid Oracle Database version. To get a list of supported versions, use the {@link ListDbVersions} operation.
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-provided name of the database home.
* @param {string} [source] The source of database: NONE for creating a new database. DB_BACKUP for creating a new database by restoring from a database backup. Required value: NONE See {@link CreateDbHomeWithDbSystemIdBase} for more information.
* @class CreateDbHomeWithDbSystemIdDetails
*/
class CreateDbHomeWithDbSystemIdDetails {
	constructor(dbSystemId, database, dbVersion, displayName, source){
		this.dbSystemId = dbSystemId;
		this.database = database;
		this.dbVersion = dbVersion;
		this.displayName = displayName;
		this.source = source;
	}
}

module.exports = CreateDbHomeWithDbSystemIdDetails;
