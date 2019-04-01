/**
* 
* @param {string} [inputType] 
* @param {string} [dataType] 
* @param {boolean} [required] 
* @param {number} [displayOrder] 
* @param {string} [description] [Localizable]
* @param {number} [maxLength] 
* @param {string} [validationRule] 
* @param {string} [validationMsg] 
* @param {string} [id] 
* @param {string} [serviceId] 
* @param {string} [name] 
* @param {string} [displayName] [Localizable]
* @param {CustomAttributeValueSet} [customAttributeValueSet] 
* @param {string} [sectionId] 
* @param {string} [subscriptionType] Allowed values are: TRIAL PRODUCTION ORACLE_ASSIGNED_ENVIRONMENT TRA_UNKNOWN
* @param {string} [canonicalLink] 
* @param {Array<ServiceOption>} [serviceOptions] Applicable to a list of Option
* @param {Array<ServicePlan>} [servicePlans] Applicable to a list of Plan
* @param {Array<CustomAttributeFilter>} [filters] Attribut Filters
* @param {string} [caDisplayNameTKey] 
* @param {string} [caDescriptionTKey] 
* @param {string} [language] 
* @param {string} [bundleName] 
* @param {string} [isMultipleOf] Is multiple of
* @param {boolean} [downgradeAllowed] Is downgrade allowed
* @class CustomAttribute
*/
class CustomAttribute {
	constructor(inputType, dataType, required, displayOrder, description, maxLength, validationRule, validationMsg, id, serviceId, name, displayName, customAttributeValueSet, sectionId, subscriptionType, canonicalLink, serviceOptions, servicePlans, filters, caDisplayNameTKey, caDescriptionTKey, language, bundleName, isMultipleOf, downgradeAllowed){
		this.inputType = inputType;
		this.dataType = dataType;
		this.required = required;
		this.displayOrder = displayOrder;
		this.description = description;
		this.maxLength = maxLength;
		this.validationRule = validationRule;
		this.validationMsg = validationMsg;
		this.id = id;
		this.serviceId = serviceId;
		this.name = name;
		this.displayName = displayName;
		this.customAttributeValueSet = customAttributeValueSet;
		this.sectionId = sectionId;
		this.subscriptionType = subscriptionType;
		this.canonicalLink = canonicalLink;
		this.serviceOptions = serviceOptions;
		this.servicePlans = servicePlans;
		this.filters = filters;
		this.caDisplayNameTKey = caDisplayNameTKey;
		this.caDescriptionTKey = caDescriptionTKey;
		this.language = language;
		this.bundleName = bundleName;
		this.isMultipleOf = isMultipleOf;
		this.downgradeAllowed = downgradeAllowed;
	}
}

module.exports = CustomAttribute;
