/**
 * A class that contains properties necessary to perform CreateIdpGroupMapping
 * @param {string} identityProviderId The OCID of the identity provider.
 * @param {CreateIdpGroupMappingDetails} createIdpGroupMappingDetails An instance of {@link CreateIdpGroupMappingDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class CreateIdpGroupMappingRequest
 */
class CreateIdpGroupMappingRequest {

	constructor(identityProviderId, createIdpGroupMappingDetails, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createIdpGroupMappingDetails;
		this.identityProviderId = identityProviderId;
		this.createIdpGroupMappingDetails = createIdpGroupMappingDetails;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
		this._pathParams['identityProviderId'] = this.identityProviderId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateIdpGroupMappingRequest;