/**
* MyServices ServiceDefinition object
* @param {string} [name] 
* @param {string} [value] 
* @param {Array<Attribute>} [attributes] 
* @class Attribute
*/
class Attribute {
	constructor(name, value, attributes){
		this.name = name;
		this.value = value;
		this.attributes = attributes;
	}
}

module.exports = Attribute;
