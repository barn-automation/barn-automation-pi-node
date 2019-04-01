/**
 * A class that contains properties necessary to perform ListBackups
 * @param {string} [databaseId] The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database.
 * @param {string} [compartmentId] Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @class ListBackupsRequest
 */
class ListBackupsRequest {

	constructor(databaseId, compartmentId, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.databaseId = databaseId;
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['databaseId'] = this.databaseId;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
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
module.exports = ListBackupsRequest;