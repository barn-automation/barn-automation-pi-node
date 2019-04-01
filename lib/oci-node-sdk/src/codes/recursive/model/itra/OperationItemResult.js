/**
* MyServices ServiceDefinition object
* @param {Array<Attribute>} [attributes] 
* @param {string} [status] Allowed values are: READY ASYNC_WAIT PROCESSING PROCESSED FAILED WAITING
* @param {string} [currentAction] 
* @param {number} [actionRetryCount] 
* @param {number} [actionScheduledOn] 
* @class OperationItemResult
*/
class OperationItemResult {
	constructor(attributes, status, currentAction, actionRetryCount, actionScheduledOn){
		this.attributes = attributes;
		this.status = status;
		this.currentAction = currentAction;
		this.actionRetryCount = actionRetryCount;
		this.actionScheduledOn = actionScheduledOn;
	}
}

module.exports = OperationItemResult;
