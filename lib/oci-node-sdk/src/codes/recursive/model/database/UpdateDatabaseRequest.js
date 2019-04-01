/**
 * A class that contains properties necessary to perform UpdateDatabase
 * @param {string} databaseId Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {UpdateDatabaseDetails} updateDatabaseDetails An instance of {@link UpdateDatabaseDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateDatabaseRequest
 */
class UpdateDatabaseRequest {

	constructor(databaseId, updateDatabaseDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateDatabaseDetails;
		this.databaseId = databaseId;
		this.updateDatabaseDetails = updateDatabaseDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['databaseId'] = this.databaseId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateDatabaseRequest;