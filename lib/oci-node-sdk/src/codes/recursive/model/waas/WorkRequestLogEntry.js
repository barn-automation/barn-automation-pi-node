/**
* A log message for a work request.
* @param {string} [message] The log message.
* @param {string} [timestamp] The date and time the work request log event happend, expressed in RFC 3339 timestamp format.
* @class WorkRequestLogEntry
*/
class WorkRequestLogEntry {
	constructor(message, timestamp){
		this.message = message;
		this.timestamp = timestamp;
	}
}

module.exports = WorkRequestLogEntry;
