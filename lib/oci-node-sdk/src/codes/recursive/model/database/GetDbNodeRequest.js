/**
 * A class that contains properties necessary to perform GetDbNode
 * @param {string} dbNodeId Minimum: 1 Maximum: 255 The database node {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetDbNodeRequest
 */
class GetDbNodeRequest {

	constructor(dbNodeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbNodeId = dbNodeId;
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
		this._pathParams['dbNodeId'] = this.dbNodeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDbNodeRequest;