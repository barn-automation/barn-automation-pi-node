/**
* MyServices ServiceDefinition object
* @param {string} [statusMessage] 
* @param {string} [status] Allowed values are: PENDING_APPROVAL REJECTED NEW PROCESSING PROCESSED FAILED
* @class OperationResult
*/
class OperationResult {
	constructor(statusMessage, status){
		this.statusMessage = statusMessage;
		this.status = status;
	}
}

module.exports = OperationResult;
