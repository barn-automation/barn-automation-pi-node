/**
* 
* @param {string} regionKey Minimum: 1 Maximum: 16 The regions's key. Allowed values are: PHX IAD FRA LHR Example: PHX
* @class CreateRegionSubscriptionDetails
*/
class CreateRegionSubscriptionDetails {
	constructor(regionKey){
		this.regionKey = regionKey;
	}
}

module.exports = CreateRegionSubscriptionDetails;
