/**
* An object returned in the event of a work request error.
* @param {string} [code] A machine-usable code for the error that occurred.
* @param {string} [message] The error message.
* @param {string} [timestamp] The date and time the work request error happened, expressed in RFC 3339 timestamp format.
* @class WorkRequestError
*/
class WorkRequestError {
	constructor(code, message, timestamp){
		this.code = code;
		this.message = message;
		this.timestamp = timestamp;
	}
}

module.exports = WorkRequestError;
