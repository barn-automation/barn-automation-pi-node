/**
 * A class that contains properties necessary to perform ListAuthTokens
 * @param {string} userId The OCID of the user.
 * @class ListAuthTokensRequest
 */
class ListAuthTokensRequest {

	constructor(userId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.userId = userId;
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
		this._pathParams['userId'] = this.userId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListAuthTokensRequest;