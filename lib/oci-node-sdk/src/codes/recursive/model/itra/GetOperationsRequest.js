/**
 * A class that contains properties necessary to perform GetOperations
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} [createdOnRangeEnd] Range end filter based on the createdOn attribute
 * @param {string} [createdOnRangeStart] Range start filter based on the createdOn attribute
 * @param {string} [expands] list of sub objects to expand inside the operation object, supported values: none, operationItems
 * @param {string} [limit] Limits the number of resources to return
 * @param {string} [modifiedOnRangeEnd] Range end filter based on the modifiedOn attribute
 * @param {string} [modifiedOnRangeStart] Range start filter based on the modifiedOn attribute
 * @param {string} [offset] Starting offset of the resources to return
 * @param {string} [operationItemAttributeName] Return all operations who have an operationitem containing the specified attribute name
 * @param {string} [operationItemAttributeValue] Return all operations who have an operationitem containing the specified attribute value
 * @param {string} [operationItemCurrentActions] Comma separated list of operation item current actions, operation whose operation item current action matches one of the specified curent action will be returned.
 * @param {string} [operationItemDefinitionId] DEPRECATED, use operationItemDefinitionIds, return the operations with an operation item definition specified
 * @param {string} [operationItemDefinitionIds] Comma separated list of operation item definitions, operations whose operation item has one of the specified operation item definition ids will be returned.
 * @param {string} [operationItemId] Return the operation containing this operation item id
 * @param {string} [operationItemStatus] DEPRECATED, use operationItemStatuses, return the operations having at least one operation item with the specified status Allowed values are: ASYNC_WAIT FAILED PROCESSED PROCESSING READY WAITING
 * @param {string} [operationItemStatuses] Comma separated list of operation item statuses, operations whose operation item status matches one of the specified operation item statuses will be returned.
 * @param {string} [orderBy] Ordering of the resources, this resource can be ordered by id, createdOn, modifiedOn
 * @param {string} [status] DEPRECATED, use statuses, operations whose status matches the specified operation status will be returned. Allowed values are: FAILED NEW PENDING_APPROVAL PROCESSED PROCESSING REJECTED
 * @param {string} [statuses] Comma separated list of operation statuses, operations whose status matches one of the specified operation statuses will be returned.
 * @param {string} [subSystem] Subsytem to query, currently only TRA is supported, operations from other subsystems can only be queried by id. Allowed values are: CIM TAS TRA
 * @param {string} [xIDTENANTNAME] The identity domain name or the IDCS GUID of the user to authenticate.
 * @class GetOperationsRequest
 */
class GetOperationsRequest {

	constructor(domain, createdOnRangeEnd, createdOnRangeStart, expands, limit, modifiedOnRangeEnd, modifiedOnRangeStart, offset, operationItemAttributeName, operationItemAttributeValue, operationItemCurrentActions, operationItemDefinitionId, operationItemDefinitionIds, operationItemId, operationItemStatus, operationItemStatuses, orderBy, status, statuses, subSystem, xIDTENANTNAME){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.createdOnRangeEnd = createdOnRangeEnd;
		this.createdOnRangeStart = createdOnRangeStart;
		this.expands = expands;
		this.limit = limit;
		this.modifiedOnRangeEnd = modifiedOnRangeEnd;
		this.modifiedOnRangeStart = modifiedOnRangeStart;
		this.offset = offset;
		this.operationItemAttributeName = operationItemAttributeName;
		this.operationItemAttributeValue = operationItemAttributeValue;
		this.operationItemCurrentActions = operationItemCurrentActions;
		this.operationItemDefinitionId = operationItemDefinitionId;
		this.operationItemDefinitionIds = operationItemDefinitionIds;
		this.operationItemId = operationItemId;
		this.operationItemStatus = operationItemStatus;
		this.operationItemStatuses = operationItemStatuses;
		this.orderBy = orderBy;
		this.status = status;
		this.statuses = statuses;
		this.subSystem = subSystem;
		this.xIDTENANTNAME = xIDTENANTNAME;
	}

	get headers(){
		this._headers['x-id-tenant-name'] = this.xIDTENANTNAME;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['createdOnRangeEnd'] = this.createdOnRangeEnd;
		this._queryParams['createdOnRangeStart'] = this.createdOnRangeStart;
		this._queryParams['expands'] = this.expands;
		this._queryParams['limit'] = this.limit;
		this._queryParams['modifiedOnRangeEnd'] = this.modifiedOnRangeEnd;
		this._queryParams['modifiedOnRangeStart'] = this.modifiedOnRangeStart;
		this._queryParams['offset'] = this.offset;
		this._queryParams['operationItemAttributeName'] = this.operationItemAttributeName;
		this._queryParams['operationItemAttributeValue'] = this.operationItemAttributeValue;
		this._queryParams['operationItemCurrentActions'] = this.operationItemCurrentActions;
		this._queryParams['operationItemDefinitionId'] = this.operationItemDefinitionId;
		this._queryParams['operationItemDefinitionIds'] = this.operationItemDefinitionIds;
		this._queryParams['operationItemId'] = this.operationItemId;
		this._queryParams['operationItemStatus'] = this.operationItemStatus;
		this._queryParams['operationItemStatuses'] = this.operationItemStatuses;
		this._queryParams['orderBy'] = this.orderBy;
		this._queryParams['status'] = this.status;
		this._queryParams['statuses'] = this.statuses;
		this._queryParams['subSystem'] = this.subSystem;
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
module.exports = GetOperationsRequest;