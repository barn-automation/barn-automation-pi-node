/**
* 
* @param {string} [customAttributeId] 
* @param {string} [name] filter name
* @param {string} [value] filter value
* @param {number} [min] 
* @param {number} [max] 
* @param {boolean} [useQuotaLimitAsMin] 
* @param {boolean} [useQuotaLimitAsMax] 
* @param {string} [allowedSubscriptionModel] Allowed values are: SERVICE_INSTANCE SERVICE_ENTITLEMENT CLOUD_CREDIT METERED_SERVICE_ENTITLEMENT TRA_UNKNOWN
* @param {Array<ServicePlan>} [applicablePlans] Plan restriction this is deplicated in 15.4.2 ONEOFF
* @class CustomAttributeFilter
*/
class CustomAttributeFilter {
	constructor(customAttributeId, name, value, min, max, useQuotaLimitAsMin, useQuotaLimitAsMax, allowedSubscriptionModel, applicablePlans){
		this.customAttributeId = customAttributeId;
		this.name = name;
		this.value = value;
		this.min = min;
		this.max = max;
		this.useQuotaLimitAsMin = useQuotaLimitAsMin;
		this.useQuotaLimitAsMax = useQuotaLimitAsMax;
		this.allowedSubscriptionModel = allowedSubscriptionModel;
		this.applicablePlans = applicablePlans;
	}
}

module.exports = CustomAttributeFilter;
