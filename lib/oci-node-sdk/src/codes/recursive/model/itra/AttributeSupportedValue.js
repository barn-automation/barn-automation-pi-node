/**
* MyServices ServiceDefinition object
* @param {string} [value] 
* @param {string} [attributeDefinitionId] 
* @param {string} [displayValue] 
* @class AttributeSupportedValue
*/
class AttributeSupportedValue {
	constructor(value, attributeDefinitionId, displayValue){
		this.value = value;
		this.attributeDefinitionId = attributeDefinitionId;
		this.displayValue = displayValue;
	}
}

module.exports = AttributeSupportedValue;
