/**
 * A class that contains properties necessary to perform GetGroup
 * @param {string} groupId The OCID of the group.
 * @class GetGroupRequest
 */
class GetGroupRequest {

	constructor(groupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.groupId = groupId;
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
		this._pathParams['groupId'] = this.groupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetGroupRequest;