/**
* An Oracle Database on a bare metal or virtual machine DB system. For more information, see Bare Metal and Virtual Machine DB Systems.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {string} dbName Minimum: 1 Maximum: 255 The database name.
* @param {string} dbUniqueName Minimum: 1 Maximum: 30 A system-generated name for the database to ensure uniqueness within an Oracle Data Guard group (a primary database and its standby databases). The unique name cannot be changed.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database.
* @param {string} lifecycleState The current state of the database. Allowed values are: PROVISIONING AVAILABLE UPDATING BACKUP_IN_PROGRESS TERMINATING TERMINATED RESTORE_FAILED FAILED
* @param {string} [characterSet] Minimum: 1 Maximum: 255 The character set for the database.
* @param {DatabaseConnectionStrings} [connectionStrings] The Connection strings used to connect to the Oracle Database.
* @param {DbBackupConfig} [dbBackupConfig] 
* @param {string} [dbHomeId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database home.
* @param {string} [dbWorkload] The database workload type.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [lifecycleDetails] Additional information about the current lifecycleState.
* @param {string} [ncharacterSet] Minimum: 1 Maximum: 255 The national character set for the database.
* @param {string} [pdbName] Minimum: 1 Maximum: 255 The name of the pluggable database. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted. Pluggable database should not be same as database name.
* @param {string} [timeCreated] The date and time the database was created.
* @class DatabaseSummary
*/
class DatabaseSummary {
	constructor(compartmentId, dbName, dbUniqueName, id, lifecycleState, characterSet, connectionStrings, dbBackupConfig, dbHomeId, dbWorkload, definedTags, freeformTags, lifecycleDetails, ncharacterSet, pdbName, timeCreated){
		this.compartmentId = compartmentId;
		this.dbName = dbName;
		this.dbUniqueName = dbUniqueName;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.characterSet = characterSet;
		this.connectionStrings = connectionStrings;
		this.dbBackupConfig = dbBackupConfig;
		this.dbHomeId = dbHomeId;
		this.dbWorkload = dbWorkload;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
		this.lifecycleDetails = lifecycleDetails;
		this.ncharacterSet = ncharacterSet;
		this.pdbName = pdbName;
		this.timeCreated = timeCreated;
	}
}

module.exports = DatabaseSummary;
