/**
* The log entity.
* @param {string} message A human-readable error string.
* @param {string} [timestamp] Date and time the log was written, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @class WorkRequestLogEntry
*/
class WorkRequestLogEntry {
	constructor(message, timestamp){
		this.message = message;
		this.timestamp = timestamp;
	}
}

module.exports = WorkRequestLogEntry;
