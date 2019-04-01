/**
* MyServices ServiceDefinition object
* @param {Array<string>} [validationClassParameters] 
* @param {string} [valueFromAttribute] 
* @param {string} [name] 
* @param {Array<AttributeSupportedValue>} [supportedValues] 
* @param {string} [supportedResourceValues] 
* @param {string} [id] 
* @param {string} [operationItemDefinitionId] 
* @param {number} [minValue] 
* @param {number} [maxValue] 
* @param {Array<AttributeDefinition>} [attributeDefinitions] 
* @param {string} [inputType] Allowed values are: READ_ONLY HIDDEN DEFINITION PROMOTION INTERNAL TEXT TEXTAREA CHECKBOX SELECT_ONE_RESOURCE SELECT_ONE_VALUE
* @param {number} [minLength] 
* @param {number} [maxLength] 
* @param {boolean} [required] 
* @param {string} [value] 
* @param {string} [validationRuleRegExp] 
* @param {string} [validationClass] 
* @param {string} [transformationClass] 
* @param {Array<string>} [transformationClassParameters] 
* @param {string} [transformationAttributeName] 
* @param {string} [description] 
* @param {string} [transformationClassExecutionMode] Allowed values are: VALIDATION PROCESSING BOTH
* @class AttributeDefinition
*/
class AttributeDefinition {
	constructor(validationClassParameters, valueFromAttribute, name, supportedValues, supportedResourceValues, id, operationItemDefinitionId, minValue, maxValue, attributeDefinitions, inputType, minLength, maxLength, required, value, validationRuleRegExp, validationClass, transformationClass, transformationClassParameters, transformationAttributeName, description, transformationClassExecutionMode){
		this.validationClassParameters = validationClassParameters;
		this.valueFromAttribute = valueFromAttribute;
		this.name = name;
		this.supportedValues = supportedValues;
		this.supportedResourceValues = supportedResourceValues;
		this.id = id;
		this.operationItemDefinitionId = operationItemDefinitionId;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.attributeDefinitions = attributeDefinitions;
		this.inputType = inputType;
		this.minLength = minLength;
		this.maxLength = maxLength;
		this.required = required;
		this.value = value;
		this.validationRuleRegExp = validationRuleRegExp;
		this.validationClass = validationClass;
		this.transformationClass = transformationClass;
		this.transformationClassParameters = transformationClassParameters;
		this.transformationAttributeName = transformationAttributeName;
		this.description = description;
		this.transformationClassExecutionMode = transformationClassExecutionMode;
	}
}

module.exports = AttributeDefinition;
