/**
* 
* @param {string} [name] 
* @param {MeteredResourceValue} [value] 
* @param {string} [instanceType] Allowed values are: TRA_UNKNOWN PRODUCTION TEST DEVELOPMENT
* @param {Array<AttributeValue>} [selectCriteriaValues] Metered Resource customAttributes attributes
* @param {string} [selectCriteriaPropSetId] 
* @class MeteredResource
*/
class MeteredResource {
	constructor(name, value, instanceType, selectCriteriaValues, selectCriteriaPropSetId){
		this.name = name;
		this.value = value;
		this.instanceType = instanceType;
		this.selectCriteriaValues = selectCriteriaValues;
		this.selectCriteriaPropSetId = selectCriteriaPropSetId;
	}
}

module.exports = MeteredResource;
