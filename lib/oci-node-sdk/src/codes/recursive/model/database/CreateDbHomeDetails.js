/**
* Details for creating a database home.
* @param {CreateDatabaseDetails} database 
* @param {string} dbVersion A valid Oracle Database version. To get a list of supported versions, use the {@link ListDbVersions} operation.
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-provided name of the database home.
* @class CreateDbHomeDetails
*/
class CreateDbHomeDetails {
	constructor(database, dbVersion, displayName){
		this.database = database;
		this.dbVersion = dbVersion;
		this.displayName = displayName;
	}
}

module.exports = CreateDbHomeDetails;
