/**
* 
* @param {string} [timeObserved] The date and time the traffic was observed, rounded down to the start of a range, and expressed in RFC 3339 timestamp format.
* @param {number} [timeRangeInSeconds] The number of seconds this data covers.
* @param {string} [tenancyId] The tenancy OCID of the data.
* @param {string} [compartmentId] The compartment OCID of the data.
* @param {string} [waasPolicyId] The policy OCID of the data.
* @param {boolean} [isOciOrigin] True if origin (endpoint) is an OCI resource. False if external.
* @param {boolean} [isBotEnabled] True if bot manager is enabled.
* @param {number} [requestCount] The number of incoming requests.
* @param {number} [trafficInBytes] Traffic in bytes.
* @param {string} [tagSlug] The tag slug for the specified waasPolicyId.
* @class WafMeterDatum
*/
class WafMeterDatum {
	constructor(timeObserved, timeRangeInSeconds, tenancyId, compartmentId, waasPolicyId, isOciOrigin, isBotEnabled, requestCount, trafficInBytes, tagSlug){
		this.timeObserved = timeObserved;
		this.timeRangeInSeconds = timeRangeInSeconds;
		this.tenancyId = tenancyId;
		this.compartmentId = compartmentId;
		this.waasPolicyId = waasPolicyId;
		this.isOciOrigin = isOciOrigin;
		this.isBotEnabled = isBotEnabled;
		this.requestCount = requestCount;
		this.trafficInBytes = trafficInBytes;
		this.tagSlug = tagSlug;
	}
}

module.exports = WafMeterDatum;
