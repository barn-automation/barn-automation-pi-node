/**
 * A class that contains properties necessary to perform UpdateNamespaceMetadata
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {UpdateNamespaceMetadataDetails} updateNamespaceMetadataDetails An instance of {@link UpdateNamespaceMetadataDetails}
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class UpdateNamespaceMetadataRequest
 */
class UpdateNamespaceMetadataRequest {

	constructor(namespaceName, updateNamespaceMetadataDetails, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateNamespaceMetadataDetails;
		this.namespaceName = namespaceName;
		this.updateNamespaceMetadataDetails = updateNamespaceMetadataDetails;
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
module.exports = UpdateNamespaceMetadataRequest;