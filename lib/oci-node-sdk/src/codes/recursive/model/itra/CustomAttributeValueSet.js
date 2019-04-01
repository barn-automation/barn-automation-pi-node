/**
* 
* @param {string} [id] 
* @param {Array<CustomAttributeValue>} [customAttributeValues] 
* @param {string} [canonicalLink] 
* @param {string} [serviceId] 
* @param {string} [language] 
* @class CustomAttributeValueSet
*/
class CustomAttributeValueSet {
	constructor(id, customAttributeValues, canonicalLink, serviceId, language){
		this.id = id;
		this.customAttributeValues = customAttributeValues;
		this.canonicalLink = canonicalLink;
		this.serviceId = serviceId;
		this.language = language;
	}
}

module.exports = CustomAttributeValueSet;
