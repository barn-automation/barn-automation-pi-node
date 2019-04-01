/**
 * A class that contains properties necessary to perform GetDbSystemPatchHistoryEntry
 * @param {string} dbSystemId Minimum: 1 Maximum: 255 The DB system {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} patchHistoryEntryId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the patch history entry.
 * @class GetDbSystemPatchHistoryEntryRequest
 */
class GetDbSystemPatchHistoryEntryRequest {

	constructor(dbSystemId, patchHistoryEntryId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbSystemId = dbSystemId;
		this.patchHistoryEntryId = patchHistoryEntryId;
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
		this._pathParams['dbSystemId'] = this.dbSystemId;
		this._pathParams['patchHistoryEntryId'] = this.patchHistoryEntryId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDbSystemPatchHistoryEntryRequest;