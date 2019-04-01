/**
 * A class that contains properties necessary to perform GetSuppression
 * @param {string} suppressionId Minimum: 1 Maximum: 255 The unique OCID of the suppression.
 * @class GetSuppressionRequest
 */
class GetSuppressionRequest {

	constructor(suppressionId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.suppressionId = suppressionId;
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
		this._pathParams['suppressionId'] = this.suppressionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSuppressionRequest;