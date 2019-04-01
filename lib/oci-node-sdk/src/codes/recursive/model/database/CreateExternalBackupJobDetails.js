/**
* 
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The targeted availability domain for the backup.
* @param {string} characterSet Minimum: 1 Maximum: 255 The character set for the database.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment where this backup should be created.
* @param {string} databaseEdition The Oracle Database edition to use for creating a database from this standalone backup. Note that 2-node RAC DB systems require Enterprise Edition - Extreme Performance. Allowed values are: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE ENTERPRISE_EDITION_EXTREME_PERFORMANCE
* @param {string} databaseMode The mode (single instance or RAC) of the database being backed up. Allowed values are: SI RAC
* @param {string} dbName Minimum: 1 Maximum: 8 The name of the database from which the backup is being taken.
* @param {string} dbVersion Minimum: 1 Maximum: 255 A valid Oracle Database version.
* @param {string} displayName Minimum: 1 Maximum: 255 A user-friendly name for the backup. This name does not have to be unique.
* @param {number} externalDatabaseIdentifier The DBID of the Oracle Database being backed up.
* @param {string} ncharacterSet Minimum: 1 Maximum: 255 The national character set for the database.
* @param {string} [dbUniqueName] Minimum: 1 Maximum: 32 The DB_UNIQUE_NAME of the Oracle Database being backed up.
* @param {string} [pdbName] Minimum: 1 Maximum: 255 The pluggable database name.
* @class CreateExternalBackupJobDetails
*/
class CreateExternalBackupJobDetails {
	constructor(availabilityDomain, characterSet, compartmentId, databaseEdition, databaseMode, dbName, dbVersion, displayName, externalDatabaseIdentifier, ncharacterSet, dbUniqueName, pdbName){
		this.availabilityDomain = availabilityDomain;
		this.characterSet = characterSet;
		this.compartmentId = compartmentId;
		this.databaseEdition = databaseEdition;
		this.databaseMode = databaseMode;
		this.dbName = dbName;
		this.dbVersion = dbVersion;
		this.displayName = displayName;
		this.externalDatabaseIdentifier = externalDatabaseIdentifier;
		this.ncharacterSet = ncharacterSet;
		this.dbUniqueName = dbUniqueName;
		this.pdbName = pdbName;
	}
}

module.exports = CreateExternalBackupJobDetails;
