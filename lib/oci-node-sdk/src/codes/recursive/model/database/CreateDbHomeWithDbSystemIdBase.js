/**
* Details for creating a database home.
* @param {string} dbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-provided name of the database home.
* @param {string} [source] The source of database: NONE for creating a new database. DB_BACKUP for creating a new database by restoring from a database backup. Allowed values are: NONE (See {@link CreateDbHomeWithDbSystemIdDetails}) DB_BACKUP (See {@link CreateDbHomeWithDbSystemIdFromBackupDetails})
* @class CreateDbHomeWithDbSystemIdBase
*/
class CreateDbHomeWithDbSystemIdBase {
	constructor(dbSystemId, displayName, source){
		this.dbSystemId = dbSystemId;
		this.displayName = displayName;
		this.source = source;
	}
}

module.exports = CreateDbHomeWithDbSystemIdBase;
