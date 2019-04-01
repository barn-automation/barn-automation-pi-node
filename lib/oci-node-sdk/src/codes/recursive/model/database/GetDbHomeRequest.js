/**
 * A class that contains properties necessary to perform GetDbHome
 * @param {string} dbHomeId Minimum: 1 Maximum: 255 The database home {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetDbHomeRequest
 */
class GetDbHomeRequest {

	constructor(dbHomeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbHomeId = dbHomeId;
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
		this._pathParams['dbHomeId'] = this.dbHomeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDbHomeRequest;