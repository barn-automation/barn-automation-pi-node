/**
* A directory where Oracle Database software is installed. A bare metal DB system can have multiple database homes and each database home can run a different supported version of Oracle Database. A virtual machine DB system can have only one database home. For more information, see Bare Metal and Virtual Machine DB Systems.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {string} dbVersion Minimum: 1 Maximum: 255 The Oracle Database version.
* @param {string} displayName Minimum: 1 Maximum: 255 The user-provided name for the database home. The name does not need to be unique.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database home.
* @param {string} lifecycleState The current state of the database home. Allowed values are: PROVISIONING AVAILABLE UPDATING TERMINATING TERMINATED FAILED
* @param {string} [dbSystemId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {string} [lastPatchHistoryEntryId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the last patch history. This value is updated as soon as a patch operation is started.
* @param {string} [timeCreated] The date and time the database home was created.
* @class DbHomeSummary
*/
class DbHomeSummary {
	constructor(compartmentId, dbVersion, displayName, id, lifecycleState, dbSystemId, lastPatchHistoryEntryId, timeCreated){
		this.compartmentId = compartmentId;
		this.dbVersion = dbVersion;
		this.displayName = displayName;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.dbSystemId = dbSystemId;
		this.lastPatchHistoryEntryId = lastPatchHistoryEntryId;
		this.timeCreated = timeCreated;
	}
}

module.exports = DbHomeSummary;
