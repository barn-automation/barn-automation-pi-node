/**
 * A class that contains properties necessary to perform GetUserGroupMembership
 * @param {string} userGroupMembershipId The OCID of the userGroupMembership.
 * @class GetUserGroupMembershipRequest
 */
class GetUserGroupMembershipRequest {

	constructor(userGroupMembershipId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.userGroupMembershipId = userGroupMembershipId;
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
		this._pathParams['userGroupMembershipId'] = this.userGroupMembershipId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetUserGroupMembershipRequest;