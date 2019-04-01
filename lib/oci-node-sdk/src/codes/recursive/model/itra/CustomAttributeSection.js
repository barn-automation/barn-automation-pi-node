/**
* 
* @param {string} [id] 
* @param {string} [serviceId] 
* @param {number} [displayOrder] 
* @param {string} [header] [Localizable]
* @param {string} [subscriptionType] Allowed values are: TRIAL PRODUCTION ORACLE_ASSIGNED_ENVIRONMENT TRA_UNKNOWN
* @param {string} [headerTKey] 
* @param {string} [language] 
* @param {string} [bundleName] 
* @class CustomAttributeSection
*/
class CustomAttributeSection {
	constructor(id, serviceId, displayOrder, header, subscriptionType, headerTKey, language, bundleName){
		this.id = id;
		this.serviceId = serviceId;
		this.displayOrder = displayOrder;
		this.header = header;
		this.subscriptionType = subscriptionType;
		this.headerTKey = headerTKey;
		this.language = language;
		this.bundleName = bundleName;
	}
}

module.exports = CustomAttributeSection;
