/**
* details for creating a subscription for a listing resource version.
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The compartmentID for the subscription.
* @param {string} [listingId] Minimum: 1 Maximum: 255 The OCID of the listing.
* @param {string} [listingResourceVersion] Minimum: 1 Maximum: 255 Listing resource version.
* @param {string} [oracleTermsOfUseLink] Minimum: 1 Maximum: 1024 Oracle TOU link
* @param {string} [eulaLink] Minimum: 1 Maximum: 1024 EULA link
* @param {string} [timeRetrieved] Date and time the agreements were retrieved, in RFC3339 format. Example: 2018-03-20T12:32:53.532Z
* @param {string} [signature] Minimum: 1 Maximum: 255 A generated signature for this listing resource version retrieved the agreements API.
* @class CreateAppCatalogSubscriptionDetails
*/
class CreateAppCatalogSubscriptionDetails {
	constructor(compartmentId, listingId, listingResourceVersion, oracleTermsOfUseLink, eulaLink, timeRetrieved, signature){
		this.compartmentId = compartmentId;
		this.listingId = listingId;
		this.listingResourceVersion = listingResourceVersion;
		this.oracleTermsOfUseLink = oracleTermsOfUseLink;
		this.eulaLink = eulaLink;
		this.timeRetrieved = timeRetrieved;
		this.signature = signature;
	}
}

module.exports = CreateAppCatalogSubscriptionDetails;
