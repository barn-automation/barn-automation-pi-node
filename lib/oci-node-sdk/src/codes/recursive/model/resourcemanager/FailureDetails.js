/**
* 
* @param {string} code Job failure reason. Allowed values are: INTERNAL_SERVICE_ERROR TERRAFORM_EXECUTION_ERROR TERRAFORM_CONFIG_UNZIP_FAILED INVALID_WORKING_DIRECTORY JOB_TIMEOUT TERRAFORM_CONFIG_VIRUS_FOUND
* @param {string} message A human-readable error string.
* @class FailureDetails
*/
class FailureDetails {
	constructor(code, message){
		this.code = code;
		this.message = message;
	}
}

module.exports = FailureDetails;
