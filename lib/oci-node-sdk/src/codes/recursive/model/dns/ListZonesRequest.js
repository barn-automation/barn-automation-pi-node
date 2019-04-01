/**
 * A class that contains properties necessary to perform ListZones
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment the resource belongs to.
 * @param {number} [limit] The maximum number of items to return in a page of the collection.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [name] A case-sensitive filter for zone names. Will match any zone with a name that equals the provided value.
 * @param {string} [nameContains] Search by zone name. Will match any zone whose name (case-insensitive) contains the provided value.
 * @param {string} [zoneType] Search by zone type, PRIMARY or SECONDARY. Will match any zone whose type equals the provided value. Allowed values are: PRIMARY SECONDARY
 * @param {string} [timeCreatedGreaterThanOrEqualTo] An {@link https://www.ietf.org/rfc/rfc3339.txt|RFC 3339} timestamp that states all returned resources were created on or after the indicated time.
 * @param {string} [timeCreatedLessThan] An {@link https://www.ietf.org/rfc/rfc3339.txt|RFC 3339} timestamp that states all returned resources were created before the indicated time.
 * @param {string} [lifecycleState] The state of a resource. Allowed values are: ACTIVE CREATING DELETED DELETING FAILED
 * @param {string} [sortBy] The field by which to sort zones. Allowed values are: name zoneType timeCreated
 * @param {string} [sortOrder] The order to sort the resources. Allowed values are: ASC DESC
 * @class ListZonesRequest
 */
class ListZonesRequest {

	constructor(compartmentId, limit, page, name, nameContains, zoneType, timeCreatedGreaterThanOrEqualTo, timeCreatedLessThan, lifecycleState, sortBy, sortOrder){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.name = name;
		this.nameContains = nameContains;
		this.zoneType = zoneType;
		this.timeCreatedGreaterThanOrEqualTo = timeCreatedGreaterThanOrEqualTo;
		this.timeCreatedLessThan = timeCreatedLessThan;
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
		this._queryParams['name'] = this.name;
		this._queryParams['nameContains'] = this.nameContains;
		this._queryParams['zoneType'] = this.zoneType;
		this._queryParams['timeCreatedGreaterThanOrEqualTo'] = this.timeCreatedGreaterThanOrEqualTo;
		this._queryParams['timeCreatedLessThan'] = this.timeCreatedLessThan;
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
module.exports = ListZonesRequest;