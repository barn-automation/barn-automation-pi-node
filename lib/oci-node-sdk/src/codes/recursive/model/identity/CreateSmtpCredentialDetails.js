/**
* 
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the SMTP credentials during creation. Does not have to be unique, and it's changeable.
* @class CreateSmtpCredentialDetails
*/
class CreateSmtpCredentialDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = CreateSmtpCredentialDetails;
