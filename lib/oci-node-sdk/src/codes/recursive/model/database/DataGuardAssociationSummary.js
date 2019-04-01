/**
* The properties that define a Data Guard association.
* @param {string} databaseId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the reporting database.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Data Guard association.
* @param {string} lifecycleState The current state of the Data Guard association. Allowed values are: PROVISIONING AVAILABLE UPDATING TERMINATING TERMINATED FAILED
* @param {string} peerDbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system containing the associated peer database.
* @param {string} peerRole The role of the peer database in this Data Guard association. Allowed values are: PRIMARY STANDBY DISABLED_STANDBY
* @param {string} protectionMode The protection mode of this Data Guard association. For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000|Oracle Data Guard Protection Modes} in the Oracle Data Guard documentation. Allowed values are: MAXIMUM_AVAILABILITY MAXIMUM_PERFORMANCE MAXIMUM_PROTECTION
* @param {string} role The role of the reporting database in this Data Guard association. Allowed values are: PRIMARY STANDBY DISABLED_STANDBY
* @param {string} [applyLag] The lag time between updates to the primary database and application of the redo data on the standby database, as computed by the reporting database. Example: 9 seconds
* @param {string} [applyRate] The rate at which redo logs are synced between the associated databases. Example: 180 Mb per second
* @param {string} [lifecycleDetails] Additional information about the current lifecycleState, if available.
* @param {string} [peerDataGuardAssociationId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the peer database's Data Guard association.
* @param {string} [peerDatabaseId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the associated peer database.
* @param {string} [peerDbHomeId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database home containing the associated peer database.
* @param {string} [timeCreated] The date and time the Data Guard association was created.
* @param {string} [transportType] The redo transport type used by this Data Guard association. For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400|Redo Transport Services} in the Oracle Data Guard documentation. Allowed values are: SYNC ASYNC FASTSYNC
* @class DataGuardAssociationSummary
*/
class DataGuardAssociationSummary {
	constructor(databaseId, id, lifecycleState, peerDbSystemId, peerRole, protectionMode, role, applyLag, applyRate, lifecycleDetails, peerDataGuardAssociationId, peerDatabaseId, peerDbHomeId, timeCreated, transportType){
		this.databaseId = databaseId;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.peerDbSystemId = peerDbSystemId;
		this.peerRole = peerRole;
		this.protectionMode = protectionMode;
		this.role = role;
		this.applyLag = applyLag;
		this.applyRate = applyRate;
		this.lifecycleDetails = lifecycleDetails;
		this.peerDataGuardAssociationId = peerDataGuardAssociationId;
		this.peerDatabaseId = peerDatabaseId;
		this.peerDbHomeId = peerDbHomeId;
		this.timeCreated = timeCreated;
		this.transportType = transportType;
	}
}

module.exports = DataGuardAssociationSummary;
