/**
 * A class that contains properties necessary to perform ListUserGroupMemberships
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @param {string} [userId] The OCID of the user.
 * @param {string} [groupId] The OCID of the group.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @class ListUserGroupMembershipsRequest
 */
class ListUserGroupMembershipsRequest {

	constructor(compartmentId, userId, groupId, page, limit){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.userId = userId;
		this.groupId = groupId;
		this.page = page;
		this.limit = limit;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['userId'] = this.userId;
		this._queryParams['groupId'] = this.groupId;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
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
module.exports = ListUserGroupMembershipsRequest;