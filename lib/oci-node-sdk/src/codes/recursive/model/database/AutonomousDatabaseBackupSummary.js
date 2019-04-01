/**
* An Autonomous Database backup. To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} autonomousDatabaseId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Database.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {string} displayName Minimum: 1 Maximum: 255 The user-friendly name for the backup. The name does not have to be unique.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Database backup.
* @param {boolean} isAutomatic Indicates whether the backup is user-initiated or automatic.
* @param {string} lifecycleState The current state of the backup. Allowed values are: CREATING ACTIVE DELETING DELETED FAILED
* @param {string} type The type of backup. Allowed values are: INCREMENTAL FULL
* @param {string} [lifecycleDetails] Additional information about the current lifecycle state.
* @param {string} [timeEnded] The date and time the backup completed.
* @param {string} [timeStarted] The date and time the backup started.
* @class AutonomousDatabaseBackupSummary
*/
class AutonomousDatabaseBackupSummary {
	constructor(autonomousDatabaseId, compartmentId, displayName, id, isAutomatic, lifecycleState, type, lifecycleDetails, timeEnded, timeStarted){
		this.autonomousDatabaseId = autonomousDatabaseId;
		this.compartmentId = compartmentId;
		this.displayName = displayName;
		this.id = id;
		this.isAutomatic = isAutomatic;
		this.lifecycleState = lifecycleState;
		this.type = type;
		this.lifecycleDetails = lifecycleDetails;
		this.timeEnded = timeEnded;
		this.timeStarted = timeStarted;
	}
}

module.exports = AutonomousDatabaseBackupSummary;
