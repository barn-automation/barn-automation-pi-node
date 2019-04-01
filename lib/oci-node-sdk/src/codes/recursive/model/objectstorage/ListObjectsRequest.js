/**
 * A class that contains properties necessary to perform ListObjects
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {string} [prefix] The string to use for matching against the start of object names in a list query.
 * @param {string} [start] Object names returned by a list query must be greater or equal to this parameter.
 * @param {string} [end] Object names returned by a list query must be strictly less than this parameter.
 * @param {number} [limit] The maximum number of items to return.
 * @param {string} [delimiter] When this parameter is set, only objects whose names do not contain the delimiter character (after an optionally specified prefix) are returned in the objects key of the response body. Scanned objects whose names contain the delimiter have the part of their name up to the first occurrence of the delimiter (including the optional prefix) returned as a set of prefixes. Note that only '/' is a supported delimiter character at this time.
 * @param {string} [fields] Object summary in list of objects includes the 'name' field. This parameter can also include 'size' (object size in bytes), 'md5', and 'timeCreated' (object creation date and time) fields. Value of this parameter should be a comma-separated, case-insensitive list of those field names. For example 'name,timeCreated,md5'. Allowed values are: name size timeCreated md5
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class ListObjectsRequest
 */
class ListObjectsRequest {

	constructor(namespaceName, bucketName, prefix, start, end, limit, delimiter, fields, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.prefix = prefix;
		this.start = start;
		this.end = end;
		this.limit = limit;
		this.delimiter = delimiter;
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
		this._queryParams['prefix'] = this.prefix;
		this._queryParams['start'] = this.start;
		this._queryParams['end'] = this.end;
		this._queryParams['limit'] = this.limit;
		this._queryParams['delimiter'] = this.delimiter;
		this._queryParams['fields'] = this.fields;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['namespaceName'] = this.namespaceName;
		this._pathParams['bucketName'] = this.bucketName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListObjectsRequest;