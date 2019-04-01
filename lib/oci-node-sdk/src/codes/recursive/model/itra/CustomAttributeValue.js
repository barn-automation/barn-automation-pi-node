/**
* 
* @param {string} [value] [Localizable]
* @param {boolean} [translationKey] 
* @param {string} [id] 
* @param {string} [setId] 
* @param {boolean} [selectedByDefault] 
* @param {string} [code] 
* @param {string} [language] 
* @param {string} [bundleName] 
* @param {string} [valueTKey] 
* @param {Array<CustomAttributeValueFilter>} [filters] 
* @class CustomAttributeValue
*/
class CustomAttributeValue {
	constructor(value, translationKey, id, setId, selectedByDefault, code, language, bundleName, valueTKey, filters){
		this.value = value;
		this.translationKey = translationKey;
		this.id = id;
		this.setId = setId;
		this.selectedByDefault = selectedByDefault;
		this.code = code;
		this.language = language;
		this.bundleName = bundleName;
		this.valueTKey = valueTKey;
		this.filters = filters;
	}
}

module.exports = CustomAttributeValue;
