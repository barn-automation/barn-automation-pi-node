/**
* The properties that define an error.
* @param {string} code A short error code that defines the error, meant for programmatic parsing. See {@link https://docs.us-phoenix-1.oraclecloud.com/Content/API/References/apierrors.htm|API Errors}.
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
