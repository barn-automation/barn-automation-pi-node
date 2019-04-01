/**
* 
* @param {string} [customAttributeName] 
* @param {string} [fixedValue] 
* @class MeteredResourceValue
*/
class MeteredResourceValue {
	constructor(customAttributeName, fixedValue){
		this.customAttributeName = customAttributeName;
		this.fixedValue = fixedValue;
	}
}

module.exports = MeteredResourceValue;
