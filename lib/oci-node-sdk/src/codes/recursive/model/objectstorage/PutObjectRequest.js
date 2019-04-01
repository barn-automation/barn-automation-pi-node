/**
 * A class that contains properties necessary to perform PutObject
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {string} objectName Minimum: 1 Maximum: 1024 The name of the object. Avoid entering confidential information. Example: test/object1.log
 * @param {Buffer} putObjectBody The request body
 * @param {number} contentLength The content length of the body.
 * @param {string} [ifMatch] The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [ifNoneMatch] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists. For creating and committing a multipart upload, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @param {string} [expect] 100-continue
 * @param {string} [contentMD5] The base-64 encoded MD5 hash of the body.
 * @param {string} [contentType] The content type of the object. Defaults to 'application/octet-stream' if not overridden during the PutObject call.
 * @param {string} [contentLanguage] The content language of the object.
 * @param {string} [contentEncoding] The content encoding of the object.
 * @param {string} [opcMeta] Optional user-defined metadata key and value.
 * @class PutObjectRequest
 */
class PutObjectRequest {

	constructor(namespaceName, bucketName, objectName, putObjectBody, contentLength, ifMatch, ifNoneMatch, opcClientRequestId, expect, contentMD5, contentType, contentLanguage, contentEncoding, opcMeta){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = putObjectBody;
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.objectName = objectName;
		this.putObjectBody = putObjectBody;
		this.contentLength = contentLength;
		this.ifMatch = ifMatch;
		this.ifNoneMatch = ifNoneMatch;
		this.opcClientRequestId = opcClientRequestId;
		this.expect = expect;
		this.contentMD5 = contentMD5;
		this.contentType = contentType;
		this.contentLanguage = contentLanguage;
		this.contentEncoding = contentEncoding;
		this.opcMeta = opcMeta;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		this._headers['expect'] = this.expect;
		this._headers['content-length'] = this.contentLength;
		this._headers['content-md5'] = this.contentMD5;
		this._headers['content-type'] = this.contentType;
		this._headers['content-language'] = this.contentLanguage;
		this._headers['content-encoding'] = this.contentEncoding;
		this._headers['opc-meta-'] = this.opcMeta;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['namespaceName'] = this.namespaceName;
		this._pathParams['bucketName'] = this.bucketName;
		this._pathParams['objectName'] = this.objectName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = PutObjectRequest;