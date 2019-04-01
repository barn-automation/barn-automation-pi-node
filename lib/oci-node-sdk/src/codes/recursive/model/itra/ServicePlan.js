/**
* 
* @param {string} [id] 
* @param {string} [plan] 
* @param {string} [displayName] [Localizable]
* @param {string} [planDisplayName] 
* @param {string} [displayOrder] 
* @param {string} [offeringType] Allowed values are: TRIAL PRODUCTION TRA_UNKNOWN
* @param {string} [canonicalLink] 
* @param {Array<CustomAttribute>} [customAttributes] Custom attributes of the service plan.
* @param {Array<MeteredResource>} [meteredResources] Metered resources of the service plan.
* @param {string} [serviceId] 
* @param {Array<GsiItem>} [gsiItems] List of GSI items use in gsi payload for PAID order
* @param {string} [spDisplayNameTKey] 
* @param {string} [language] 
* @param {string} [bundleName] 
* @param {boolean} [commonInstanceManagerEnabled] CIM enabled
* @class ServicePlan
*/
class ServicePlan {
	constructor(id, plan, displayName, planDisplayName, displayOrder, offeringType, canonicalLink, customAttributes, meteredResources, serviceId, gsiItems, spDisplayNameTKey, language, bundleName, commonInstanceManagerEnabled){
		this.id = id;
		this.plan = plan;
		this.displayName = displayName;
		this.planDisplayName = planDisplayName;
		this.displayOrder = displayOrder;
		this.offeringType = offeringType;
		this.canonicalLink = canonicalLink;
		this.customAttributes = customAttributes;
		this.meteredResources = meteredResources;
		this.serviceId = serviceId;
		this.gsiItems = gsiItems;
		this.spDisplayNameTKey = spDisplayNameTKey;
		this.language = language;
		this.bundleName = bundleName;
		this.commonInstanceManagerEnabled = commonInstanceManagerEnabled;
	}
}

module.exports = ServicePlan;
