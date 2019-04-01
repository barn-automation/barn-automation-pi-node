/**
* The DNS resolution results.
* @param {number} [domainLookupDuration] Total DNS resolution duration, in milliseconds. Calculated using domainLookupEnd minus domainLookupStart.
* @param {Array<string>} [addresses] The addresses returned by DNS resolution.
* @class DNS
*/
class DNS {
	constructor(domainLookupDuration, addresses){
		this.domainLookupDuration = domainLookupDuration;
		this.addresses = addresses;
	}
}

module.exports = DNS;
