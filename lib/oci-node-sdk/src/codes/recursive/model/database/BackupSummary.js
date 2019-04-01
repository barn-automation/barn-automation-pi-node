/**
* A database backup. To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} [availabilityDomain] The name of the availability domain where the database backup is stored.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {string} [databaseEdition] The Oracle Database edition of the DB system from which the database backup was taken. Allowed values are: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE ENTERPRISE_EDITION_EXTREME_PERFORMANCE
* @param {string} [databaseId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database.
* @param {number} [databaseSizeInGBs] The size of the database in gigabytes at the time the backup was taken.
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name for the backup. The name does not have to be unique.
* @param {string} [id] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the backup.
* @param {string} [lifecycleDetails] Additional information about the current lifecycleState.
* @param {string} [lifecycleState] The current state of the backup. Allowed values are: CREATING ACTIVE DELETING DELETED FAILED RESTORING
* @param {string} [timeEnded] The date and time the backup was completed.
* @param {string} [timeStarted] The date and time the backup started.
* @param {string} [type] The type of backup. Allowed values are: INCREMENTAL FULL
* @class BackupSummary
*/
class BackupSummary {
	constructor(availabilityDomain, compartmentId, databaseEdition, databaseId, databaseSizeInGBs, displayName, id, lifecycleDetails, lifecycleState, timeEnded, timeStarted, type){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.databaseEdition = databaseEdition;
		this.databaseId = databaseId;
		this.databaseSizeInGBs = databaseSizeInGBs;
		this.displayName = displayName;
		this.id = id;
		this.lifecycleDetails = lifecycleDetails;
		this.lifecycleState = lifecycleState;
		this.timeEnded = timeEnded;
		this.timeStarted = timeStarted;
		this.type = type;
	}
}

module.exports = BackupSummary;
