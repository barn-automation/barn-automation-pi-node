/**
 * A class that contains properties necessary to perform ListCompartments
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [accessLevel] Valid values are ANY and ACCESSIBLE. Default is ANY. Setting this to ACCESSIBLE returns only those compartments for which the user has INSPECT permissions directly or indirectly (permissions can be on a resource in a subcompartment). For the compartments on which the user indirectly has INSPECT permissions, a restricted set of fields is returned. When set to ANY permissions are not checked. Allowed values are: ANY ACCESSIBLE
 * @param {boolean} [compartmentIdInSubtree] Default is false. Can only be set to true when performing ListCompartments on the tenancy (root compartment). When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned depending on the the setting of accessLevel.
 * @class ListCompartmentsRequest
 */
class ListCompartmentsRequest {

	constructor(compartmentId, page, limit, accessLevel, compartmentIdInSubtree){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.page = page;
		this.limit = limit;
		this.accessLevel = accessLevel;
		this.compartmentIdInSubtree = compartmentIdInSubtree;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['accessLevel'] = this.accessLevel;
		this._queryParams['compartmentIdInSubtree'] = this.compartmentIdInSubtree;
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
module.exports = ListCompartmentsRequest;