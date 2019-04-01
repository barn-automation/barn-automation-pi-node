/**
 * A class that contains properties necessary to perform GetAppCatalogListingAgreements
 * @param {string} listingId The OCID of the listing.
 * @param {string} resourceVersion Listing Resource Version.
 * @class GetAppCatalogListingAgreementsRequest
 */
class GetAppCatalogListingAgreementsRequest {

	constructor(listingId, resourceVersion){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.listingId = listingId;
		this.resourceVersion = resourceVersion;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['listingId'] = this.listingId;
		this._pathParams['resourceVersion'] = this.resourceVersion;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAppCatalogListingAgreementsRequest;