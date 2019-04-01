/**
* Error that occurs during the execution of a job.
* @param {string} code A short error code that defines the error, meant for programmatic parsing. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/API/References/apierrors.htm|API Errors}.
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
