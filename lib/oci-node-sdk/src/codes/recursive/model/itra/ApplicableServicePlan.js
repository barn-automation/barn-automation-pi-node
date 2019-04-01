/**
* 
* @param {ServicePlan} [servicePlan] 
* @param {Array<string>} [requestTypes] 
* @class ApplicableServicePlan
*/
class ApplicableServicePlan {
	constructor(servicePlan, requestTypes){
		this.servicePlan = servicePlan;
		this.requestTypes = requestTypes;
	}
}

module.exports = ApplicableServicePlan;
