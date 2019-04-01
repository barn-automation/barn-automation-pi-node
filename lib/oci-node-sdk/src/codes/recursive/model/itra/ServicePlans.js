/**
* 
* @param {Array<ServicePlan>} [items] 
* @param {string} [canonicalLink] 
* @param {string} [serviceId] 
* @class ServicePlans
*/
class ServicePlans {
	constructor(items, canonicalLink, serviceId){
		this.items = items;
		this.canonicalLink = canonicalLink;
		this.serviceId = serviceId;
	}
}

module.exports = ServicePlans;
