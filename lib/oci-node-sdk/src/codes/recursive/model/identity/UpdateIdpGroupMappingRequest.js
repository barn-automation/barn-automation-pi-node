/**
 * A class that contains properties necessary to perform UpdateIdpGroupMapping
 * @param {string} identityProviderId The OCID of the identity provider.
 * @param {string} mappingId The OCID of the group mapping.
 * @param {UpdateIdpGroupMappingDetails} updateIdpGroupMappingDetails An instance of {@link UpdateIdpGroupMappingDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateIdpGroupMappingRequest
 */
class UpdateIdpGroupMappingRequest {

	constructor(identityProviderId, mappingId, updateIdpGroupMappingDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateIdpGroupMappingDetails;
		this.identityProviderId = identityProviderId;
		this.mappingId = mappingId;
		this.updateIdpGroupMappingDetails = updateIdpGroupMappingDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['mappingId'] = this.mappingId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateIdpGroupMappingRequest;