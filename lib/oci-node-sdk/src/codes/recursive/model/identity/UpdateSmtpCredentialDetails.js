/**
* 
* @param {string} [description] The description you assign to the SMTP credential. Does not have to be unique, and it's changeable.
* @class UpdateSmtpCredentialDetails
*/
class UpdateSmtpCredentialDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = UpdateSmtpCredentialDetails;
