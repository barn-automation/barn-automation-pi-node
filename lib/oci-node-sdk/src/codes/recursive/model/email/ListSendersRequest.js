/**
 * A class that contains properties necessary to perform ListSenders
 * @param {string} compartmentId The OCID for the compartment.
 * @param {string} [lifecycleState] The current state of a sender.
 * @param {string} [emailAddress] Minimum: 6 Maximum: 254 The email address of the approved sender.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous GET request.
 * @param {number} [limit] The maximum number of items to return in a paginated GET request.
 * @param {string} [sortBy] The field to sort by. The TIMECREATED value returns the list in in descending order by default. The EMAILADDRESS value returns the list in ascending order by default. Use the SortOrderQueryParam to change the direction of the returned list of items. Allowed values are: TIMECREATED EMAILADDRESS
 * @param {string} [sortOrder] The sort order to use, either ascending or descending order. Allowed values are: ASC DESC
 * @class ListSendersRequest
 */
class ListSendersRequest {

	constructor(compartmentId, lifecycleState, emailAddress, page, limit, sortBy, sortOrder){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.lifecycleState = lifecycleState;
		this.emailAddress = emailAddress;
		this.page = page;
		this.limit = limit;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['emailAddress'] = this.emailAddress;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
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
module.exports = ListSendersRequest;