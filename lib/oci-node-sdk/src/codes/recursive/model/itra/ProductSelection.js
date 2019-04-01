/**
* 
* @param {string} [localizationId] 
* @param {string} [name] 
* @param {string} [value] 
* @class ProductSelection
*/
class ProductSelection {
	constructor(localizationId, name, value){
		this.localizationId = localizationId;
		this.name = name;
		this.value = value;
	}
}

module.exports = ProductSelection;
