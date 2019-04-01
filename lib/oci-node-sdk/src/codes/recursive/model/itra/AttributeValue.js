/**
* 
* @param {string} [name] Name of the attribute
* @param {string} [value] Value of the attribute
* @param {string} [parentType] 
* @param {string} [parentId] 
* @param {string} [propertySetId] 
* @class AttributeValue
*/
class AttributeValue {
	constructor(name, value, parentType, parentId, propertySetId){
		this.name = name;
		this.value = value;
		this.parentType = parentType;
		this.parentId = parentId;
		this.propertySetId = propertySetId;
	}
}

module.exports = AttributeValue;
