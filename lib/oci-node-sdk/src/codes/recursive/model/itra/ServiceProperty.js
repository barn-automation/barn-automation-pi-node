/**
* 
* @param {string} [serviceId] Returns the associated service Id
* @param {string} [name] The property's name
* @param {string} [category] The property's category
* @param {string} [value] The property's value
* @class ServiceProperty
*/
class ServiceProperty {
	constructor(serviceId, name, category, value){
		this.serviceId = serviceId;
		this.name = name;
		this.category = category;
		this.value = value;
	}
}

module.exports = ServiceProperty;
