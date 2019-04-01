/**
* MyServices ServiceDefinition object
* @param {Array<Attribute>} [attributes] 
* @param {number} [createdOn] 
* @param {string} [id] 
* @param {string} [operationId] 
* @param {string} [operationItemId] 
* @param {string} [action] 
* @param {string} [status] Allowed values are: READY ASYNC_WAIT PROCESSING PROCESSED FAILED WAITING
* @param {string} [message] 
* @class ActionLog
*/
class ActionLog {
	constructor(attributes, createdOn, id, operationId, operationItemId, action, status, message){
		this.attributes = attributes;
		this.createdOn = createdOn;
		this.id = id;
		this.operationId = operationId;
		this.operationItemId = operationItemId;
		this.action = action;
		this.status = status;
		this.message = message;
	}
}

module.exports = ActionLog;
