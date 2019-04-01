/**
 * A class that contains properties necessary to perform ListCertificates
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment. This number is generated when the compartment is created.
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 10.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {string} [sortBy] The value by which certificate summaries are sorted in a paginated 'List' call. If unspecified, defaults to timeCreated. Allowed values are: id compartmentId displayName notValidAfter timeCreated
 * @param {string} [sortOrder] The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to DESC. Allowed values are: ASC DESC
 * @param {Array} [id] Filter certificates using a list of certificates OCIDs.
 * @param {Array} [displayName] Filter certificates using a list of display names.
 * @param {Array} [lifecycleState] Filter certificates using a list of lifecycle states.
 * @param {string} [timeCreatedGreaterThanOrEqualTo] A filter that matches certificates created on or after the specified date-time.
 * @param {string} [timeCreatedLessThan] A filter that matches certificates created before the specified date-time.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListCertificatesRequest
 */
class ListCertificatesRequest {

	constructor(compartmentId, limit, page, sortBy, sortOrder, id, displayName, lifecycleState, timeCreatedGreaterThanOrEqualTo, timeCreatedLessThan, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.id = id;
		this.displayName = displayName;
		this.lifecycleState = lifecycleState;
		this.timeCreatedGreaterThanOrEqualTo = timeCreatedGreaterThanOrEqualTo;
		this.timeCreatedLessThan = timeCreatedLessThan;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['id'] = this.id;
		this._queryParams['displayName'] = this.displayName;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['timeCreatedGreaterThanOrEqualTo'] = this.timeCreatedGreaterThanOrEqualTo;
		this._queryParams['timeCreatedLessThan'] = this.timeCreatedLessThan;
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
module.exports = ListCertificatesRequest;