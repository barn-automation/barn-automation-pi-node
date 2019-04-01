/**
 * A class that contains properties necessary to perform GetAppCatalogListing
 * @param {string} listingId The OCID of the listing.
 * @class GetAppCatalogListingRequest
 */
class GetAppCatalogListingRequest {

	constructor(listingId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.listingId = listingId;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAppCatalogListingRequest;