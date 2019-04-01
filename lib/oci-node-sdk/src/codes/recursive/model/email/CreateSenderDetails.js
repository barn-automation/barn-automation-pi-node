/**
* The details needed for creating a sender.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment that contains the sender.
* @param {string} [emailAddress] Minimum: 6 Maximum: 254 The email address of the sender.
* @class CreateSenderDetails
*/
class CreateSenderDetails {
	constructor(compartmentId, emailAddress){
		this.compartmentId = compartmentId;
		this.emailAddress = emailAddress;
	}
}

module.exports = CreateSenderDetails;
