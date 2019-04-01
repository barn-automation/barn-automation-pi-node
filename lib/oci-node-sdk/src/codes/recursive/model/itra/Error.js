/**
* 
* @param {number} [httpStatusCode] 
* @param {string} [httpMessage] 
* @param {string} [errorCode] 
* @param {string} [errorMessage] 
* @param {string} [relatedLink] 
* @param {string} [additionalInfoLink] 
* @class Error
*/
class Error {
	constructor(httpStatusCode, httpMessage, errorCode, errorMessage, relatedLink, additionalInfoLink){
		this.httpStatusCode = httpStatusCode;
		this.httpMessage = httpMessage;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.relatedLink = relatedLink;
		this.additionalInfoLink = additionalInfoLink;
	}
}

module.exports = Error;
