/**
* Log entry for an operation resulting from a job's execution.
* @param {string} [type] Specifies the log type for the log entry. Allowed values are: TERRAFORM_CONSOLE
* @param {string} [level] Specifies the severity level of the log entry. Allowed values are: TRACE DEBUG INFO WARN ERROR FATAL
* @param {string} [timestamp] Date and time of the log entry.
* @param {string} [message] The log entry value.
* @class LogEntry
*/
class LogEntry {
	constructor(type, level, timestamp, message){
		this.type = type;
		this.level = level;
		this.timestamp = timestamp;
		this.message = message;
	}
}

module.exports = LogEntry;
