/**
 * A class that contains properties necessary to perform DeleteAppCatalogSubscription
 * @param {string} listingId The OCID of the listing.
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
 * @param {string} resourceVersion Listing Resource Version.
 * @class DeleteAppCatalogSubscriptionRequest
 */
class DeleteAppCatalogSubscriptionRequest {

	constructor(listingId, compartmentId, resourceVersion){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.listingId = listingId;
		this.compartmentId = compartmentId;
		this.resourceVersion = resourceVersion;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['listingId'] = this.listingId;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['resourceVersion'] = this.resourceVersion;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = DeleteAppCatalogSubscriptionRequest;