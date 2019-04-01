/**
* The details needed for creating a single suppression.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment to contain the suppression. Since suppressions are at the customer level, this must be the tenancy OCID.
* @param {string} [emailAddress] Minimum: 6 Maximum: The recipient email address of the suppression.
* @class CreateSuppressionDetails
*/
class CreateSuppressionDetails {
	constructor(compartmentId, emailAddress){
		this.compartmentId = compartmentId;
		this.emailAddress = emailAddress;
	}
}

module.exports = CreateSuppressionDetails;
