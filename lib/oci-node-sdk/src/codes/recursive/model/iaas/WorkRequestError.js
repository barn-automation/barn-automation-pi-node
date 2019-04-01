/**
* An object returned in the event of a work request error.
* @param {string} errorCode Allowed values are: BAD_INPUT INTERNAL_ERROR
* @param {string} message A human-readable error string.
* @class WorkRequestError
*/
class WorkRequestError {
	constructor(errorCode, message){
		this.errorCode = errorCode;
		this.message = message;
	}
}

module.exports = WorkRequestError;
