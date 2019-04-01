/**
 * A class that contains properties necessary to perform GetServiceInstances
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} [ids] Filter on a list of ids
 * @param {string} [limit] Limits the number of resources to return
 * @param {string} [offset] Starting offset of the resources to return
 * @param {string} [orderBy] Ordering of the resources, this resource can be ordered by id, modifiedOn, createdOn
 * @param {string} [purchaseEntitlementId] Filter on purchase entitlement id
 * @param {string} [serviceDefinitionNames] Filter on a list of service definition names
 * @param {string} [serviceEntitlementId] 
 * @param {string} [statuses] Filter on a list of statuses
 * @class GetServiceInstancesRequest
 */
class GetServiceInstancesRequest {

	constructor(domain, ids, limit, offset, orderBy, purchaseEntitlementId, serviceDefinitionNames, serviceEntitlementId, statuses){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.ids = ids;
		this.limit = limit;
		this.offset = offset;
		this.orderBy = orderBy;
		this.purchaseEntitlementId = purchaseEntitlementId;
		this.serviceDefinitionNames = serviceDefinitionNames;
		this.serviceEntitlementId = serviceEntitlementId;
		this.statuses = statuses;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['ids'] = this.ids;
		this._queryParams['limit'] = this.limit;
		this._queryParams['offset'] = this.offset;
		this._queryParams['orderBy'] = this.orderBy;
		this._queryParams['purchaseEntitlementId'] = this.purchaseEntitlementId;
		this._queryParams['serviceDefinitionNames'] = this.serviceDefinitionNames;
		this._queryParams['serviceEntitlementId'] = this.serviceEntitlementId;
		this._queryParams['statuses'] = this.statuses;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['domain'] = this.domain;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetServiceInstancesRequest;