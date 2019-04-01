/**
* 
* @param {string} code A short error code meant for programmatic parsing that defines the error.
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
