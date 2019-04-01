/**
 * A class that contains properties necessary to perform DeleteDbHome
 * @param {string} dbHomeId Minimum: 1 Maximum: 255 The database home {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {boolean} [performFinalBackup] Whether to perform a final backup of the database or not. Default is false. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class DeleteDbHomeRequest
 */
class DeleteDbHomeRequest {

	constructor(dbHomeId, performFinalBackup, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbHomeId = dbHomeId;
		this.performFinalBackup = performFinalBackup;
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
		this._queryParams['performFinalBackup'] = this.performFinalBackup;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['dbHomeId'] = this.dbHomeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = DeleteDbHomeRequest;