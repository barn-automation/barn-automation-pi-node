/**
* The error entity.
* @param {string} code A machine-usable code for the error that occured.
* @param {string} message A human-readable error string.
* @param {string} [timestamp] Date and time the error happened, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
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
