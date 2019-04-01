/**
* Details for scheduling vault deletion
* @param {string} [timeOfDeletion] An optional property to indicate the deletion time of the vault, expressed in {@link https://tools.ietf.org/html/rfc3339|RFC 3339} timestamp format. The specified time must be between 7 and 30 days from the time when the request is received. If this property is missing, it will be set to 30 days from the time of the request by default.
* @class ScheduleVaultDeletionDetails
*/
class ScheduleVaultDeletionDetails {
	constructor(timeOfDeletion){
		this.timeOfDeletion = timeOfDeletion;
	}
}

module.exports = ScheduleVaultDeletionDetails;
