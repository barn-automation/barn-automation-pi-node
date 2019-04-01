/**
* 
* @param {string} [itemName] gsi item name used in sgi payload.
* @param {string} [itemDesc] gsi item desccription
* @param {string} [planId] Unique id to represent the plan.
* @param {string} [serviceId] 
* @param {string} [id] 
* @class GsiItem
*/
class GsiItem {
	constructor(itemName, itemDesc, planId, serviceId, id){
		this.itemName = itemName;
		this.itemDesc = itemDesc;
		this.planId = planId;
		this.serviceId = serviceId;
		this.id = id;
	}
}

module.exports = GsiItem;
