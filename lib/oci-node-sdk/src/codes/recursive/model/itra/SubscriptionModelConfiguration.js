/**
* 
* @param {string} [subscriptionModel] Allowed values are: SERVICE_INSTANCE SERVICE_ENTITLEMENT CLOUD_CREDIT METERED_SERVICE_ENTITLEMENT TRA_UNKNOWN
* @param {boolean} [meteringEnabled] Metering enabled for this subscription model.
* @param {number} [maxCommonInstanceManagerInstances] Maximun of Common Instance Manager instances
* @class SubscriptionModelConfiguration
*/
class SubscriptionModelConfiguration {
	constructor(subscriptionModel, meteringEnabled, maxCommonInstanceManagerInstances){
		this.subscriptionModel = subscriptionModel;
		this.meteringEnabled = meteringEnabled;
		this.maxCommonInstanceManagerInstances = maxCommonInstanceManagerInstances;
	}
}

module.exports = SubscriptionModelConfiguration;
