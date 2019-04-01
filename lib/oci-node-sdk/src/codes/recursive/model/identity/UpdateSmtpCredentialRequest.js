/**
 * A class that contains properties necessary to perform UpdateSmtpCredential
 * @param {string} userId The OCID of the user.
 * @param {string} smtpCredentialId The OCID of the SMTP credential.
 * @param {UpdateSmtpCredentialDetails} updateSmtpCredentialDetails An instance of {@link UpdateSmtpCredentialDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateSmtpCredentialRequest
 */
class UpdateSmtpCredentialRequest {

	constructor(userId, smtpCredentialId, updateSmtpCredentialDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateSmtpCredentialDetails;
		this.userId = userId;
		this.smtpCredentialId = smtpCredentialId;
		this.updateSmtpCredentialDetails = updateSmtpCredentialDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['userId'] = this.userId;
		this._pathParams['smtpCredentialId'] = this.smtpCredentialId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateSmtpCredentialRequest;