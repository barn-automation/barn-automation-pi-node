/**
* 
* @param {string} [id] Unique identifier/key.
* @param {string} [name] Name of the service option.
* @param {string} [displayName] Display of the service option.
* @param {Array<CustomAttribute>} [customAttributes] Custom attributes of the service option.
* @param {Array<MeteredResource>} [meteredResources] Metered resources of the service option.
* @param {Array<ApplicableServicePlan>} [applicableServicePlans] Applicable plan of the service option.
* @param {Service} [service] Service of the service option.
* @param {string} [canonicalLink] Service option's canonical link.
* @param {string} [serviceId] 
* @param {boolean} [commonInstanceManagerEnabled] CIM enabled
* @class ServiceOption
*/
class ServiceOption {
	constructor(id, name, displayName, customAttributes, meteredResources, applicableServicePlans, service, canonicalLink, serviceId, commonInstanceManagerEnabled){
		this.id = id;
		this.name = name;
		this.displayName = displayName;
		this.customAttributes = customAttributes;
		this.meteredResources = meteredResources;
		this.applicableServicePlans = applicableServicePlans;
		this.service = service;
		this.canonicalLink = canonicalLink;
		this.serviceId = serviceId;
		this.commonInstanceManagerEnabled = commonInstanceManagerEnabled;
	}
}

module.exports = ServiceOption;
