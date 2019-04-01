/**
* An error response.
* @param {string} code A short error code that defines the error. Meant for programmatic parsing. See {@link https://docs.cloud.oracle.com/Content/API/References/apierrors.htm|API Errors}.
* @param {string} message A human-readable error string.
* @class Error
*/
class Error {
	constructor(code, message){
		this.code = code;
		this.message = message;
	}
}

module.exports = Error;
