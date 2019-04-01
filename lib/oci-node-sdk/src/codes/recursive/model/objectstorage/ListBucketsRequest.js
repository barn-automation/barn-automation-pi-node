/**
 * A class that contains properties necessary to perform ListBuckets
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} compartmentId The ID of the compartment in which to list buckets.
 * @param {number} [limit] The maximum number of items to return.
 * @param {string} [page] Minimum: 1 Maximum: 1024 The page at which to start retrieving results.
 * @param {Array} [fields] Bucket summary in list of buckets includes the 'namespace', 'name', 'compartmentId', 'createdBy', 'timeCreated', and 'etag' fields. This parameter can also include 'tags' (freeformTags and definedTags). The only supported value of this parameter is 'tags' for now. Example 'tags'.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class ListBucketsRequest
 */
class ListBucketsRequest {

	constructor(namespaceName, compartmentId, limit, page, fields, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.namespaceName = namespaceName;
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.fields = fields;
		this.opcClientRequestId = opcClientRequestId;
	}

	get headers(){
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['fields'] = this.fields;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['namespaceName'] = this.namespaceName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListBucketsRequest;