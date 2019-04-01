/**
 * A class that contains properties necessary to perform ListSteeringPolicies
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment the resource belongs to.
 * @param {number} [limit] The maximum number of items to return in a page of the collection.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [id] Minimum: 1 Maximum: 255 The OCID of a resource.
 * @param {string} [displayName] Minimum: 1 Maximum: 255 The displayName of a resource.
 * @param {string} [displayNameContains] Minimum: 1 Maximum: 255 The partial displayName of a resource. Will match any resource whose name (case-insensitive) contains the provided value.
 * @param {string} [healthCheckMonitorId] Search by health check monitor OCID. Will match any resource whose health check monitor ID matches the provided value.
 * @param {string} [timeCreatedGreaterThanOrEqualTo] An {@link https://www.ietf.org/rfc/rfc3339.txt|RFC 3339} timestamp that states all returned resources were created on or after the indicated time.
 * @param {string} [timeCreatedLessThan] An {@link https://www.ietf.org/rfc/rfc3339.txt|RFC 3339} timestamp that states all returned resources were created before the indicated time.
 * @param {string} [template] Search by steering template type. Will match any resource whose template type matches the provided value.
 * @param {string} [lifecycleState] The state of a resource.
 * @param {string} [sortBy] The field by which to sort steering policies. If unspecified, defaults to timeCreated. Allowed values are: displayName timeCreated template
 * @param {string} [sortOrder] The order to sort the resources. Allowed values are: ASC DESC
 * @class ListSteeringPoliciesRequest
 */
class ListSteeringPoliciesRequest {

	constructor(compartmentId, limit, page, id, displayName, displayNameContains, healthCheckMonitorId, timeCreatedGreaterThanOrEqualTo, timeCreatedLessThan, template, lifecycleState, sortBy, sortOrder){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.id = id;
		this.displayName = displayName;
		this.displayNameContains = displayNameContains;
		this.healthCheckMonitorId = healthCheckMonitorId;
		this.timeCreatedGreaterThanOrEqualTo = timeCreatedGreaterThanOrEqualTo;
		this.timeCreatedLessThan = timeCreatedLessThan;
		this.template = template;
		this.lifecycleState = lifecycleState;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['id'] = this.id;
		this._queryParams['displayName'] = this.displayName;
		this._queryParams['displayNameContains'] = this.displayNameContains;
		this._queryParams['healthCheckMonitorId'] = this.healthCheckMonitorId;
		this._queryParams['timeCreatedGreaterThanOrEqualTo'] = this.timeCreatedGreaterThanOrEqualTo;
		this._queryParams['timeCreatedLessThan'] = this.timeCreatedLessThan;
		this._queryParams['template'] = this.template;
		this._queryParams['lifecycleState'] = this.lifecycleState;
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
module.exports = ListSteeringPoliciesRequest;