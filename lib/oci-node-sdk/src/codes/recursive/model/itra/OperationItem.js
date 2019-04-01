/**
* MyServices ServiceDefinition object
* @param {Array<Attribute>} [attributes] 
* @param {OperationItemDefinition} [operationItemDefinition] 
* @param {OperationItemResult} [result] 
* @param {number} [createdOn] 
* @param {number} [modifiedOn] 
* @param {string} [id] 
* @param {string} [operationId] 
* @param {Array<ActionLog>} [actionLogs] 
* @class OperationItem
*/
class OperationItem {
	constructor(attributes, operationItemDefinition, result, createdOn, modifiedOn, id, operationId, actionLogs){
		this.attributes = attributes;
		this.operationItemDefinition = operationItemDefinition;
		this.result = result;
		this.createdOn = createdOn;
		this.modifiedOn = modifiedOn;
		this.id = id;
		this.operationId = operationId;
		this.actionLogs = actionLogs;
	}
}

module.exports = OperationItem;
