/**
* An error code and message.
* @param {string} code 
* @param {string} message 
* @class Error
*/
class Error {
	constructor(code, message){
		this.code = code;
		this.message = message;
	}
}

module.exports = Error;
