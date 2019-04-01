const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Identity and Access Management Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class IAMClient
 * @extends AbstractApiClient
 */
class IAMClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://identity.${this.region}.oraclecloud.com`;
	}


	/**
	* Deletes the specified API signing key for the specified user.
	* @param {DeleteApiKeyRequest} deleteApiKeyRequest An instance of DeleteApiKeyRequest
	* @method
	*/
	deleteApiKey(deleteApiKeyRequest){
		const params = this.Utils.cleanObject( deleteApiKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteApiKeyRequest.pathParams.userId}/apiKeys/${deleteApiKeyRequest.pathParams.fingerprint}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteApiKeyRequest.headers )
		}, JSON.stringify(deleteApiKeyRequest.body));
	}


	/**
	* Lists the API signing keys for the specified user. A user can have a maximum of three keys.
	* @param {ListApiKeysRequest} listApiKeysRequest An instance of ListApiKeysRequest
	* @method
	*/
	listApiKeys(listApiKeysRequest){
		const params = this.Utils.cleanObject( listApiKeysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listApiKeysRequest.pathParams.userId}/apiKeys/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listApiKeysRequest.headers )
		}, JSON.stringify(listApiKeysRequest.body));
	}


	/**
	* Uploads an API signing key for the specified user.
	* @param {UploadApiKeyRequest} uploadApiKeyRequest An instance of UploadApiKeyRequest
	* @method
	*/
	uploadApiKey(uploadApiKeyRequest){
		const params = this.Utils.cleanObject( uploadApiKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${uploadApiKeyRequest.pathParams.userId}/apiKeys/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( uploadApiKeyRequest.headers )
		}, JSON.stringify(uploadApiKeyRequest.body));
	}


	/**
	* Creates a new auth token for the specified user. For information about what auth tokens are for, see Managing User Credentials.
	* @param {CreateAuthTokenRequest} createAuthTokenRequest An instance of CreateAuthTokenRequest
	* @method
	*/
	createAuthToken(createAuthTokenRequest){
		const params = this.Utils.cleanObject( createAuthTokenRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createAuthTokenRequest.pathParams.userId}/authTokens/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAuthTokenRequest.headers )
		}, JSON.stringify(createAuthTokenRequest.body));
	}


	/**
	* Deletes the specified auth token for the specified user.
	* @param {DeleteAuthTokenRequest} deleteAuthTokenRequest An instance of DeleteAuthTokenRequest
	* @method
	*/
	deleteAuthToken(deleteAuthTokenRequest){
		const params = this.Utils.cleanObject( deleteAuthTokenRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteAuthTokenRequest.pathParams.userId}/authTokens/${deleteAuthTokenRequest.pathParams.authTokenId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAuthTokenRequest.headers )
		}, JSON.stringify(deleteAuthTokenRequest.body));
	}


	/**
	* Lists the auth tokens for the specified user. The returned object contains the token's OCID, but not the token itself. The actual token is returned only upon creation.
	* @param {ListAuthTokensRequest} listAuthTokensRequest An instance of ListAuthTokensRequest
	* @method
	*/
	listAuthTokens(listAuthTokensRequest){
		const params = this.Utils.cleanObject( listAuthTokensRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listAuthTokensRequest.pathParams.userId}/authTokens/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAuthTokensRequest.headers )
		}, JSON.stringify(listAuthTokensRequest.body));
	}


	/**
	* Updates the specified auth token's description.
	* @param {UpdateAuthTokenRequest} updateAuthTokenRequest An instance of UpdateAuthTokenRequest
	* @method
	*/
	updateAuthToken(updateAuthTokenRequest){
		const params = this.Utils.cleanObject( updateAuthTokenRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateAuthTokenRequest.pathParams.userId}/authTokens/${updateAuthTokenRequest.pathParams.authTokenId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAuthTokenRequest.headers )
		}, JSON.stringify(updateAuthTokenRequest.body));
	}


	/**
	* Lists the availability domains in your tenancy. Specify the OCID of either the tenancy or another of your compartments as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID. Note that the order of the results returned can change if availability domains are added or removed; therefore, do not create a dependency on the list order.
	* @param {ListAvailabilityDomainsRequest} listAvailabilityDomainsRequest An instance of ListAvailabilityDomainsRequest
	* @method
	*/
	listAvailabilityDomains(listAvailabilityDomainsRequest){
		const params = this.Utils.cleanObject( listAvailabilityDomainsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/availabilityDomains/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAvailabilityDomainsRequest.headers )
		}, JSON.stringify(listAvailabilityDomainsRequest.body));
	}


	/**
	* Creates a new compartment in the specified compartment.
	* @param {CreateCompartmentRequest} createCompartmentRequest An instance of CreateCompartmentRequest
	* @method
	*/
	createCompartment(createCompartmentRequest){
		const params = this.Utils.cleanObject( createCompartmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/compartments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCompartmentRequest.headers )
		}, JSON.stringify(createCompartmentRequest.body));
	}


	/**
	* Deletes the specified compartment. The compartment must be empty.
	* @param {DeleteCompartmentRequest} deleteCompartmentRequest An instance of DeleteCompartmentRequest
	* @method
	*/
	deleteCompartment(deleteCompartmentRequest){
		const params = this.Utils.cleanObject( deleteCompartmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/compartments/${deleteCompartmentRequest.pathParams.compartmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCompartmentRequest.headers )
		}, JSON.stringify(deleteCompartmentRequest.body));
	}


	/**
	* Gets the specified compartment's information.
	* @param {GetCompartmentRequest} getCompartmentRequest An instance of GetCompartmentRequest
	* @method
	*/
	getCompartment(getCompartmentRequest){
		const params = this.Utils.cleanObject( getCompartmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/compartments/${getCompartmentRequest.pathParams.compartmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCompartmentRequest.headers )
		}, JSON.stringify(getCompartmentRequest.body));
	}


	/**
	* Lists the compartments in a specified compartment. The members of the list returned depends on the values set for several parameters.
	* @param {ListCompartmentsRequest} listCompartmentsRequest An instance of ListCompartmentsRequest
	* @method
	*/
	listCompartments(listCompartmentsRequest){
		const params = this.Utils.cleanObject( listCompartmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/compartments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCompartmentsRequest.headers )
		}, JSON.stringify(listCompartmentsRequest.body));
	}


	/**
	* Updates the specified compartment's description or name. You can't update the root compartment.
	* @param {UpdateCompartmentRequest} updateCompartmentRequest An instance of UpdateCompartmentRequest
	* @method
	*/
	updateCompartment(updateCompartmentRequest){
		const params = this.Utils.cleanObject( updateCompartmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/compartments/${updateCompartmentRequest.pathParams.compartmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCompartmentRequest.headers )
		}, JSON.stringify(updateCompartmentRequest.body));
	}


	/**
	* Creates a new secret key for the specified user. Secret keys are used for authentication with the Object Storage Service's Amazon S3 compatible API. For information, see Managing User Credentials.
	* @param {CreateCustomerSecretKeyRequest} createCustomerSecretKeyRequest An instance of CreateCustomerSecretKeyRequest
	* @method
	*/
	createCustomerSecretKey(createCustomerSecretKeyRequest){
		const params = this.Utils.cleanObject( createCustomerSecretKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createCustomerSecretKeyRequest.pathParams.userId}/customerSecretKeys/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCustomerSecretKeyRequest.headers )
		}, JSON.stringify(createCustomerSecretKeyRequest.body));
	}


	/**
	* Deletes the specified secret key for the specified user.
	* @param {DeleteCustomerSecretKeyRequest} deleteCustomerSecretKeyRequest An instance of DeleteCustomerSecretKeyRequest
	* @method
	*/
	deleteCustomerSecretKey(deleteCustomerSecretKeyRequest){
		const params = this.Utils.cleanObject( deleteCustomerSecretKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteCustomerSecretKeyRequest.pathParams.userId}/customerSecretKeys/${deleteCustomerSecretKeyRequest.pathParams.customerSecretKeyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCustomerSecretKeyRequest.headers )
		}, JSON.stringify(deleteCustomerSecretKeyRequest.body));
	}


	/**
	* Lists the secret keys for the specified user. The returned object contains the secret key's OCID, but not the secret key itself. The actual secret key is returned only upon creation.
	* @param {ListCustomerSecretKeysRequest} listCustomerSecretKeysRequest An instance of ListCustomerSecretKeysRequest
	* @method
	*/
	listCustomerSecretKeys(listCustomerSecretKeysRequest){
		const params = this.Utils.cleanObject( listCustomerSecretKeysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listCustomerSecretKeysRequest.pathParams.userId}/customerSecretKeys/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCustomerSecretKeysRequest.headers )
		}, JSON.stringify(listCustomerSecretKeysRequest.body));
	}


	/**
	* Updates the specified secret key's description.
	* @param {UpdateCustomerSecretKeyRequest} updateCustomerSecretKeyRequest An instance of UpdateCustomerSecretKeyRequest
	* @method
	*/
	updateCustomerSecretKey(updateCustomerSecretKeyRequest){
		const params = this.Utils.cleanObject( updateCustomerSecretKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateCustomerSecretKeyRequest.pathParams.userId}/customerSecretKeys/${updateCustomerSecretKeyRequest.pathParams.customerSecretKeyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCustomerSecretKeyRequest.headers )
		}, JSON.stringify(updateCustomerSecretKeyRequest.body));
	}


	/**
	* Creates a new dynamic group in your tenancy.
	* @param {CreateDynamicGroupRequest} createDynamicGroupRequest An instance of CreateDynamicGroupRequest
	* @method
	*/
	createDynamicGroup(createDynamicGroupRequest){
		const params = this.Utils.cleanObject( createDynamicGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dynamicGroups/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDynamicGroupRequest.headers )
		}, JSON.stringify(createDynamicGroupRequest.body));
	}


	/**
	* Deletes the specified dynamic group.
	* @param {DeleteDynamicGroupRequest} deleteDynamicGroupRequest An instance of DeleteDynamicGroupRequest
	* @method
	*/
	deleteDynamicGroup(deleteDynamicGroupRequest){
		const params = this.Utils.cleanObject( deleteDynamicGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dynamicGroups/${deleteDynamicGroupRequest.pathParams.dynamicGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDynamicGroupRequest.headers )
		}, JSON.stringify(deleteDynamicGroupRequest.body));
	}


	/**
	* Gets the specified dynamic group's information.
	* @param {GetDynamicGroupRequest} getDynamicGroupRequest An instance of GetDynamicGroupRequest
	* @method
	*/
	getDynamicGroup(getDynamicGroupRequest){
		const params = this.Utils.cleanObject( getDynamicGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dynamicGroups/${getDynamicGroupRequest.pathParams.dynamicGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDynamicGroupRequest.headers )
		}, JSON.stringify(getDynamicGroupRequest.body));
	}


	/**
	* Lists the dynamic groups in your tenancy. You must specify your tenancy's OCID as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListDynamicGroupsRequest} listDynamicGroupsRequest An instance of ListDynamicGroupsRequest
	* @method
	*/
	listDynamicGroups(listDynamicGroupsRequest){
		const params = this.Utils.cleanObject( listDynamicGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dynamicGroups/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDynamicGroupsRequest.headers )
		}, JSON.stringify(listDynamicGroupsRequest.body));
	}


	/**
	* Updates the specified dynamic group.
	* @param {UpdateDynamicGroupRequest} updateDynamicGroupRequest An instance of UpdateDynamicGroupRequest
	* @method
	*/
	updateDynamicGroup(updateDynamicGroupRequest){
		const params = this.Utils.cleanObject( updateDynamicGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dynamicGroups/${updateDynamicGroupRequest.pathParams.dynamicGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDynamicGroupRequest.headers )
		}, JSON.stringify(updateDynamicGroupRequest.body));
	}


	/**
	* Lists the Fault Domains in your tenancy. Specify the OCID of either the tenancy or another of your compartments as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListFaultDomainsRequest} listFaultDomainsRequest An instance of ListFaultDomainsRequest
	* @method
	*/
	listFaultDomains(listFaultDomainsRequest){
		const params = this.Utils.cleanObject( listFaultDomainsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/faultDomains/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listFaultDomainsRequest.headers )
		}, JSON.stringify(listFaultDomainsRequest.body));
	}


	/**
	* Creates a new group in your tenancy.
	* @param {CreateGroupRequest} createGroupRequest An instance of CreateGroupRequest
	* @method
	*/
	createGroup(createGroupRequest){
		const params = this.Utils.cleanObject( createGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/groups/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createGroupRequest.headers )
		}, JSON.stringify(createGroupRequest.body));
	}


	/**
	* Deletes the specified group. The group must be empty.
	* @param {DeleteGroupRequest} deleteGroupRequest An instance of DeleteGroupRequest
	* @method
	*/
	deleteGroup(deleteGroupRequest){
		const params = this.Utils.cleanObject( deleteGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/groups/${deleteGroupRequest.pathParams.groupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteGroupRequest.headers )
		}, JSON.stringify(deleteGroupRequest.body));
	}


	/**
	* Gets the specified group's information.
	* @param {GetGroupRequest} getGroupRequest An instance of GetGroupRequest
	* @method
	*/
	getGroup(getGroupRequest){
		const params = this.Utils.cleanObject( getGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/groups/${getGroupRequest.pathParams.groupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getGroupRequest.headers )
		}, JSON.stringify(getGroupRequest.body));
	}


	/**
	* Lists the groups in your tenancy. You must specify your tenancy's OCID as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListGroupsRequest} listGroupsRequest An instance of ListGroupsRequest
	* @method
	*/
	listGroups(listGroupsRequest){
		const params = this.Utils.cleanObject( listGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/groups/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listGroupsRequest.headers )
		}, JSON.stringify(listGroupsRequest.body));
	}


	/**
	* Updates the specified group.
	* @param {UpdateGroupRequest} updateGroupRequest An instance of UpdateGroupRequest
	* @method
	*/
	updateGroup(updateGroupRequest){
		const params = this.Utils.cleanObject( updateGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/groups/${updateGroupRequest.pathParams.groupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateGroupRequest.headers )
		}, JSON.stringify(updateGroupRequest.body));
	}


	/**
	* Creates a new identity provider in your tenancy. For more information, see Identity Providers and Federation.
	* @param {CreateIdentityProviderRequest} createIdentityProviderRequest An instance of CreateIdentityProviderRequest
	* @method
	*/
	createIdentityProvider(createIdentityProviderRequest){
		const params = this.Utils.cleanObject( createIdentityProviderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createIdentityProviderRequest.headers )
		}, JSON.stringify(createIdentityProviderRequest.body));
	}


	/**
	* Deletes the specified identity provider. The identity provider must not have any group mappings (see IdpGroupMapping).
	* @param {DeleteIdentityProviderRequest} deleteIdentityProviderRequest An instance of DeleteIdentityProviderRequest
	* @method
	*/
	deleteIdentityProvider(deleteIdentityProviderRequest){
		const params = this.Utils.cleanObject( deleteIdentityProviderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${deleteIdentityProviderRequest.pathParams.identityProviderId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteIdentityProviderRequest.headers )
		}, JSON.stringify(deleteIdentityProviderRequest.body));
	}


	/**
	* Gets the specified identity provider's information.
	* @param {GetIdentityProviderRequest} getIdentityProviderRequest An instance of GetIdentityProviderRequest
	* @method
	*/
	getIdentityProvider(getIdentityProviderRequest){
		const params = this.Utils.cleanObject( getIdentityProviderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${getIdentityProviderRequest.pathParams.identityProviderId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getIdentityProviderRequest.headers )
		}, JSON.stringify(getIdentityProviderRequest.body));
	}


	/**
	* Lists all the identity providers in your tenancy. You must specify the identity provider type (e.g., SAML2 for identity providers using the SAML2.0 protocol). You must specify your tenancy's OCID as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListIdentityProvidersRequest} listIdentityProvidersRequest An instance of ListIdentityProvidersRequest
	* @method
	*/
	listIdentityProviders(listIdentityProvidersRequest){
		const params = this.Utils.cleanObject( listIdentityProvidersRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listIdentityProvidersRequest.headers )
		}, JSON.stringify(listIdentityProvidersRequest.body));
	}


	/**
	* Updates the specified identity provider.
	* @param {UpdateIdentityProviderRequest} updateIdentityProviderRequest An instance of UpdateIdentityProviderRequest
	* @method
	*/
	updateIdentityProvider(updateIdentityProviderRequest){
		const params = this.Utils.cleanObject( updateIdentityProviderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${updateIdentityProviderRequest.pathParams.identityProviderId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateIdentityProviderRequest.headers )
		}, JSON.stringify(updateIdentityProviderRequest.body));
	}


	/**
	* Lists the identity provider groups.
	* @param {ListIdentityProviderGroupsRequest} listIdentityProviderGroupsRequest An instance of ListIdentityProviderGroupsRequest
	* @method
	*/
	listIdentityProviderGroups(listIdentityProviderGroupsRequest){
		const params = this.Utils.cleanObject( listIdentityProviderGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${listIdentityProviderGroupsRequest.pathParams.identityProviderId}/groups/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listIdentityProviderGroupsRequest.headers )
		}, JSON.stringify(listIdentityProviderGroupsRequest.body));
	}


	/**
	* Creates a single mapping between an IdP group and an IAM Service group.
	* @param {CreateIdpGroupMappingRequest} createIdpGroupMappingRequest An instance of CreateIdpGroupMappingRequest
	* @method
	*/
	createIdpGroupMapping(createIdpGroupMappingRequest){
		const params = this.Utils.cleanObject( createIdpGroupMappingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${createIdpGroupMappingRequest.pathParams.identityProviderId}/groupMappings/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createIdpGroupMappingRequest.headers )
		}, JSON.stringify(createIdpGroupMappingRequest.body));
	}


	/**
	* Deletes the specified group mapping.
	* @param {DeleteIdpGroupMappingRequest} deleteIdpGroupMappingRequest An instance of DeleteIdpGroupMappingRequest
	* @method
	*/
	deleteIdpGroupMapping(deleteIdpGroupMappingRequest){
		const params = this.Utils.cleanObject( deleteIdpGroupMappingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${deleteIdpGroupMappingRequest.pathParams.identityProviderId}/groupMappings/${deleteIdpGroupMappingRequest.pathParams.mappingId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteIdpGroupMappingRequest.headers )
		}, JSON.stringify(deleteIdpGroupMappingRequest.body));
	}


	/**
	* Gets the specified group mapping.
	* @param {GetIdpGroupMappingRequest} getIdpGroupMappingRequest An instance of GetIdpGroupMappingRequest
	* @method
	*/
	getIdpGroupMapping(getIdpGroupMappingRequest){
		const params = this.Utils.cleanObject( getIdpGroupMappingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${getIdpGroupMappingRequest.pathParams.identityProviderId}/groupMappings/${getIdpGroupMappingRequest.pathParams.mappingId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getIdpGroupMappingRequest.headers )
		}, JSON.stringify(getIdpGroupMappingRequest.body));
	}


	/**
	* Lists the group mappings for the specified identity provider.
	* @param {ListIdpGroupMappingsRequest} listIdpGroupMappingsRequest An instance of ListIdpGroupMappingsRequest
	* @method
	*/
	listIdpGroupMappings(listIdpGroupMappingsRequest){
		const params = this.Utils.cleanObject( listIdpGroupMappingsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${listIdpGroupMappingsRequest.pathParams.identityProviderId}/groupMappings/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listIdpGroupMappingsRequest.headers )
		}, JSON.stringify(listIdpGroupMappingsRequest.body));
	}


	/**
	* Updates the specified group mapping.
	* @param {UpdateIdpGroupMappingRequest} updateIdpGroupMappingRequest An instance of UpdateIdpGroupMappingRequest
	* @method
	*/
	updateIdpGroupMapping(updateIdpGroupMappingRequest){
		const params = this.Utils.cleanObject( updateIdpGroupMappingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${updateIdpGroupMappingRequest.pathParams.identityProviderId}/groupMappings/${updateIdpGroupMappingRequest.pathParams.mappingId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateIdpGroupMappingRequest.headers )
		}, JSON.stringify(updateIdpGroupMappingRequest.body));
	}


	/**
	* Creates a new MFA TOTP device for the user. A user can have one MFA TOTP device.
	* @param {CreateMfaTotpDeviceRequest} createMfaTotpDeviceRequest An instance of CreateMfaTotpDeviceRequest
	* @method
	*/
	createMfaTotpDevice(createMfaTotpDeviceRequest){
		const params = this.Utils.cleanObject( createMfaTotpDeviceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createMfaTotpDeviceRequest.pathParams.userId}/mfaTotpDevices${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createMfaTotpDeviceRequest.headers )
		}, JSON.stringify(createMfaTotpDeviceRequest.body));
	}


	/**
	* Deletes the specified MFA TOTP device for the specified user.
	* @param {DeleteMfaTotpDeviceRequest} deleteMfaTotpDeviceRequest An instance of DeleteMfaTotpDeviceRequest
	* @method
	*/
	deleteMfaTotpDevice(deleteMfaTotpDeviceRequest){
		const params = this.Utils.cleanObject( deleteMfaTotpDeviceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteMfaTotpDeviceRequest.pathParams.userId}/mfaTotpDevices/${deleteMfaTotpDeviceRequest.pathParams.mfaTotpDeviceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteMfaTotpDeviceRequest.headers )
		}, JSON.stringify(deleteMfaTotpDeviceRequest.body));
	}


	/**
	* Generate seed for the MFA TOTP device.
	* @param {GenerateTotpSeedRequest} generateTotpSeedRequest An instance of GenerateTotpSeedRequest
	* @method
	*/
	generateTotpSeed(generateTotpSeedRequest){
		const params = this.Utils.cleanObject( generateTotpSeedRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${generateTotpSeedRequest.pathParams.userId}/mfaTotpDevices/${generateTotpSeedRequest.pathParams.mfaTotpDeviceId}/actions/generateSeed${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( generateTotpSeedRequest.headers )
		}, JSON.stringify(generateTotpSeedRequest.body));
	}


	/**
	* Activates the specified MFA TOTP device for the user. Activation requires manual interaction with the Console.
	* @param {ActivateMfaTotpDeviceRequest} activateMfaTotpDeviceRequest An instance of ActivateMfaTotpDeviceRequest
	* @method
	*/
	activateMfaTotpDevice(activateMfaTotpDeviceRequest){
		const params = this.Utils.cleanObject( activateMfaTotpDeviceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${activateMfaTotpDeviceRequest.pathParams.userId}/mfaTotpDevices/${activateMfaTotpDeviceRequest.pathParams.mfaTotpDeviceId}/actions/activate${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( activateMfaTotpDeviceRequest.headers )
		}, JSON.stringify(activateMfaTotpDeviceRequest.body));
	}


	/**
	* Get the specified MFA TOTP device for the specified user.
	* @param {GetMfaTotpDeviceRequest} getMfaTotpDeviceRequest An instance of GetMfaTotpDeviceRequest
	* @method
	*/
	getMfaTotpDevice(getMfaTotpDeviceRequest){
		const params = this.Utils.cleanObject( getMfaTotpDeviceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${getMfaTotpDeviceRequest.pathParams.userId}/mfaTotpDevices/${getMfaTotpDeviceRequest.pathParams.mfaTotpDeviceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getMfaTotpDeviceRequest.headers )
		}, JSON.stringify(getMfaTotpDeviceRequest.body));
	}


	/**
	* Lists the MFA TOTP devices for the specified user. The returned object contains the device's OCID, but not the seed. The seed is returned only upon creation or when the IAM service regenerates the MFA seed for the device.
	* @param {ListMfaTotpDevicesRequest} listMfaTotpDevicesRequest An instance of ListMfaTotpDevicesRequest
	* @method
	*/
	listMfaTotpDevices(listMfaTotpDevicesRequest){
		const params = this.Utils.cleanObject( listMfaTotpDevicesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listMfaTotpDevicesRequest.pathParams.userId}/mfaTotpDevices${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listMfaTotpDevicesRequest.headers )
		}, JSON.stringify(listMfaTotpDevicesRequest.body));
	}


	/**
	* Creates a new policy in the specified compartment (either the tenancy or another of your compartments). If you're new to policies, see Getting Started with Policies.
	* @param {CreatePolicyRequest} createPolicyRequest An instance of CreatePolicyRequest
	* @method
	*/
	createPolicy(createPolicyRequest){
		const params = this.Utils.cleanObject( createPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/policies/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPolicyRequest.headers )
		}, JSON.stringify(createPolicyRequest.body));
	}


	/**
	* Deletes the specified policy. The deletion takes effect typically within 10 seconds.
	* @param {DeletePolicyRequest} deletePolicyRequest An instance of DeletePolicyRequest
	* @method
	*/
	deletePolicy(deletePolicyRequest){
		const params = this.Utils.cleanObject( deletePolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/policies/${deletePolicyRequest.pathParams.policyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePolicyRequest.headers )
		}, JSON.stringify(deletePolicyRequest.body));
	}


	/**
	* Gets the specified policy's information.
	* @param {GetPolicyRequest} getPolicyRequest An instance of GetPolicyRequest
	* @method
	*/
	getPolicy(getPolicyRequest){
		const params = this.Utils.cleanObject( getPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/policies/${getPolicyRequest.pathParams.policyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPolicyRequest.headers )
		}, JSON.stringify(getPolicyRequest.body));
	}


	/**
	* Lists the policies in the specified compartment (either the tenancy or another of your compartments). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListPoliciesRequest} listPoliciesRequest An instance of ListPoliciesRequest
	* @method
	*/
	listPolicies(listPoliciesRequest){
		const params = this.Utils.cleanObject( listPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/policies/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPoliciesRequest.headers )
		}, JSON.stringify(listPoliciesRequest.body));
	}


	/**
	* Updates the specified policy. You can update the description or the policy statements themselves.
	* @param {UpdatePolicyRequest} updatePolicyRequest An instance of UpdatePolicyRequest
	* @method
	*/
	updatePolicy(updatePolicyRequest){
		const params = this.Utils.cleanObject( updatePolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/policies/${updatePolicyRequest.pathParams.policyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePolicyRequest.headers )
		}, JSON.stringify(updatePolicyRequest.body));
	}


	/**
	* Lists all the regions offered by Oracle Cloud Infrastructure.
	* @method
	*/
	listRegions(){
		const url = `${this.serviceBaseUrl}/20160918/regions`;
		return this.doRequest(url, 'GET', {});
	}


	/**
	* Creates a subscription to a region for a tenancy.
	* @param {CreateRegionSubscriptionRequest} createRegionSubscriptionRequest An instance of CreateRegionSubscriptionRequest
	* @method
	*/
	createRegionSubscription(createRegionSubscriptionRequest){
		const params = this.Utils.cleanObject( createRegionSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tenancies/${createRegionSubscriptionRequest.pathParams.tenancyId}/regionSubscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createRegionSubscriptionRequest.headers )
		}, JSON.stringify(createRegionSubscriptionRequest.body));
	}


	/**
	* Lists the region subscriptions for the specified tenancy.
	* @param {ListRegionSubscriptionsRequest} listRegionSubscriptionsRequest An instance of ListRegionSubscriptionsRequest
	* @method
	*/
	listRegionSubscriptions(listRegionSubscriptionsRequest){
		const params = this.Utils.cleanObject( listRegionSubscriptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tenancies/${listRegionSubscriptionsRequest.pathParams.tenancyId}/regionSubscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listRegionSubscriptionsRequest.headers )
		}, JSON.stringify(listRegionSubscriptionsRequest.body));
	}


	/**
	* Resets the OAuth2 client credentials for the SCIM client associated with this identity provider.
	* @param {ResetIdpScimClientRequest} resetIdpScimClientRequest An instance of ResetIdpScimClientRequest
	* @method
	*/
	resetIdpScimClient(resetIdpScimClientRequest){
		const params = this.Utils.cleanObject( resetIdpScimClientRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/identityProviders/${resetIdpScimClientRequest.pathParams.identityProviderId}/actions/resetScimClient/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( resetIdpScimClientRequest.headers )
		}, JSON.stringify(resetIdpScimClientRequest.body));
	}


	/**
	* Creates a new SMTP credential for the specified user. An SMTP credential has an SMTP user name and an SMTP password. You must specify a description for the SMTP credential (although it can be an empty string). It does not have to be unique, and you can change it anytime with UpdateSmtpCredential.
	* @param {CreateSmtpCredentialRequest} createSmtpCredentialRequest An instance of CreateSmtpCredentialRequest
	* @method
	*/
	createSmtpCredential(createSmtpCredentialRequest){
		const params = this.Utils.cleanObject( createSmtpCredentialRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createSmtpCredentialRequest.pathParams.userId}/smtpCredentials/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSmtpCredentialRequest.headers )
		}, JSON.stringify(createSmtpCredentialRequest.body));
	}


	/**
	* Deletes the specified SMTP credential for the specified user.
	* @param {DeleteSmtpCredentialRequest} deleteSmtpCredentialRequest An instance of DeleteSmtpCredentialRequest
	* @method
	*/
	deleteSmtpCredential(deleteSmtpCredentialRequest){
		const params = this.Utils.cleanObject( deleteSmtpCredentialRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteSmtpCredentialRequest.pathParams.userId}/smtpCredentials/${deleteSmtpCredentialRequest.pathParams.smtpCredentialId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSmtpCredentialRequest.headers )
		}, JSON.stringify(deleteSmtpCredentialRequest.body));
	}


	/**
	* Lists the SMTP credentials for the specified user. The returned object contains the credential's OCID, the SMTP user name but not the SMTP password. The SMTP password is returned only upon creation.
	* @param {ListSmtpCredentialsRequest} listSmtpCredentialsRequest An instance of ListSmtpCredentialsRequest
	* @method
	*/
	listSmtpCredentials(listSmtpCredentialsRequest){
		const params = this.Utils.cleanObject( listSmtpCredentialsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listSmtpCredentialsRequest.pathParams.userId}/smtpCredentials/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSmtpCredentialsRequest.headers )
		}, JSON.stringify(listSmtpCredentialsRequest.body));
	}


	/**
	* Updates the specified SMTP credential's description.
	* @param {UpdateSmtpCredentialRequest} updateSmtpCredentialRequest An instance of UpdateSmtpCredentialRequest
	* @method
	*/
	updateSmtpCredential(updateSmtpCredentialRequest){
		const params = this.Utils.cleanObject( updateSmtpCredentialRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateSmtpCredentialRequest.pathParams.userId}/smtpCredentials/${updateSmtpCredentialRequest.pathParams.smtpCredentialId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSmtpCredentialRequest.headers )
		}, JSON.stringify(updateSmtpCredentialRequest.body));
	}


	/**
	* Deprecated. Use CreateAuthToken instead.
	* @param {CreateSwiftPasswordRequest} createSwiftPasswordRequest An instance of CreateSwiftPasswordRequest
	* @method
	*/
	createSwiftPassword(createSwiftPasswordRequest){
		const params = this.Utils.cleanObject( createSwiftPasswordRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createSwiftPasswordRequest.pathParams.userId}/swiftPasswords/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSwiftPasswordRequest.headers )
		}, JSON.stringify(createSwiftPasswordRequest.body));
	}


	/**
	* Deprecated. Use DeleteAuthToken instead.
	* @param {DeleteSwiftPasswordRequest} deleteSwiftPasswordRequest An instance of DeleteSwiftPasswordRequest
	* @method
	*/
	deleteSwiftPassword(deleteSwiftPasswordRequest){
		const params = this.Utils.cleanObject( deleteSwiftPasswordRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteSwiftPasswordRequest.pathParams.userId}/swiftPasswords/${deleteSwiftPasswordRequest.pathParams.swiftPasswordId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSwiftPasswordRequest.headers )
		}, JSON.stringify(deleteSwiftPasswordRequest.body));
	}


	/**
	* Deprecated. Use ListAuthTokens instead.
	* @param {ListSwiftPasswordsRequest} listSwiftPasswordsRequest An instance of ListSwiftPasswordsRequest
	* @method
	*/
	listSwiftPasswords(listSwiftPasswordsRequest){
		const params = this.Utils.cleanObject( listSwiftPasswordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${listSwiftPasswordsRequest.pathParams.userId}/swiftPasswords/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSwiftPasswordsRequest.headers )
		}, JSON.stringify(listSwiftPasswordsRequest.body));
	}


	/**
	* Deprecated. Use UpdateAuthToken instead.
	* @param {UpdateSwiftPasswordRequest} updateSwiftPasswordRequest An instance of UpdateSwiftPasswordRequest
	* @method
	*/
	updateSwiftPassword(updateSwiftPasswordRequest){
		const params = this.Utils.cleanObject( updateSwiftPasswordRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateSwiftPasswordRequest.pathParams.userId}/swiftPasswords/${updateSwiftPasswordRequest.pathParams.swiftPasswordId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSwiftPasswordRequest.headers )
		}, JSON.stringify(updateSwiftPasswordRequest.body));
	}


	/**
	* Creates a new tag in the specified tag namespace.
	* @param {CreateTagRequest} createTagRequest An instance of CreateTagRequest
	* @method
	*/
	createTag(createTagRequest){
		const params = this.Utils.cleanObject( createTagRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${createTagRequest.pathParams.tagNamespaceId}/tags${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createTagRequest.headers )
		}, JSON.stringify(createTagRequest.body));
	}


	/**
	* Gets the specified tag's information.
	* @param {GetTagRequest} getTagRequest An instance of GetTagRequest
	* @method
	*/
	getTag(getTagRequest){
		const params = this.Utils.cleanObject( getTagRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${getTagRequest.pathParams.tagNamespaceId}/tags/${getTagRequest.pathParams.tagName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getTagRequest.headers )
		}, JSON.stringify(getTagRequest.body));
	}


	/**
	* Lists all the tags enabled for cost-tracking in the specified tenancy. For information about cost-tracking tags, see Using Cost-tracking Tags.
	* @param {ListCostTrackingTagsRequest} listCostTrackingTagsRequest An instance of ListCostTrackingTagsRequest
	* @method
	*/
	listCostTrackingTags(listCostTrackingTagsRequest){
		const params = this.Utils.cleanObject( listCostTrackingTagsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/actions/listCostTrackingTags${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCostTrackingTagsRequest.headers )
		}, JSON.stringify(listCostTrackingTagsRequest.body));
	}


	/**
	* Updates the the specified tag definition. You can update description, and isRetired.
	* @param {UpdateTagRequest} updateTagRequest An instance of UpdateTagRequest
	* @method
	*/
	updateTag(updateTagRequest){
		const params = this.Utils.cleanObject( updateTagRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${updateTagRequest.pathParams.tagNamespaceId}/tags/${updateTagRequest.pathParams.tagName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateTagRequest.headers )
		}, JSON.stringify(updateTagRequest.body));
	}


	/**
	* Creates a new tag namespace in the specified compartment.
	* @param {CreateTagNamespaceRequest} createTagNamespaceRequest An instance of CreateTagNamespaceRequest
	* @method
	*/
	createTagNamespace(createTagNamespaceRequest){
		const params = this.Utils.cleanObject( createTagNamespaceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createTagNamespaceRequest.headers )
		}, JSON.stringify(createTagNamespaceRequest.body));
	}


	/**
	* Gets the specified tag namespace's information.
	* @param {GetTagNamespaceRequest} getTagNamespaceRequest An instance of GetTagNamespaceRequest
	* @method
	*/
	getTagNamespace(getTagNamespaceRequest){
		const params = this.Utils.cleanObject( getTagNamespaceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${getTagNamespaceRequest.pathParams.tagNamespaceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getTagNamespaceRequest.headers )
		}, JSON.stringify(getTagNamespaceRequest.body));
	}


	/**
	* Updates the the specified tag namespace. You can't update the namespace name.
	* @param {UpdateTagNamespaceRequest} updateTagNamespaceRequest An instance of UpdateTagNamespaceRequest
	* @method
	*/
	updateTagNamespace(updateTagNamespaceRequest){
		const params = this.Utils.cleanObject( updateTagNamespaceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${updateTagNamespaceRequest.pathParams.tagNamespaceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateTagNamespaceRequest.headers )
		}, JSON.stringify(updateTagNamespaceRequest.body));
	}


	/**
	* Lists the tag namespaces in the specified compartment.
	* @param {ListTagNamespacesRequest} listTagNamespacesRequest An instance of ListTagNamespacesRequest
	* @method
	*/
	listTagNamespaces(listTagNamespacesRequest){
		const params = this.Utils.cleanObject( listTagNamespacesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listTagNamespacesRequest.headers )
		}, JSON.stringify(listTagNamespacesRequest.body));
	}


	/**
	* Lists the tag definitions in the specified tag namespace.
	* @param {ListTagsRequest} listTagsRequest An instance of ListTagsRequest
	* @method
	*/
	listTags(listTagsRequest){
		const params = this.Utils.cleanObject( listTagsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tagNamespaces/${listTagsRequest.pathParams.tagNamespaceId}/tags${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listTagsRequest.headers )
		}, JSON.stringify(listTagsRequest.body));
	}


	/**
	* Get the specified tenancy's information.
	* @param {GetTenancyRequest} getTenancyRequest An instance of GetTenancyRequest
	* @method
	*/
	getTenancy(getTenancyRequest){
		const params = this.Utils.cleanObject( getTenancyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/tenancies/${getTenancyRequest.pathParams.tenancyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getTenancyRequest.headers )
		}, JSON.stringify(getTenancyRequest.body));
	}


	/**
	* Creates a new Console one-time password for the specified user. For more information about user credentials, see User Credentials.
	* @param {CreateOrResetUIPasswordRequest} createOrResetUIPasswordRequest An instance of CreateOrResetUIPasswordRequest
	* @method
	*/
	createOrResetUIPassword(createOrResetUIPasswordRequest){
		const params = this.Utils.cleanObject( createOrResetUIPasswordRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${createOrResetUIPasswordRequest.pathParams.userId}/uiPassword${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createOrResetUIPasswordRequest.headers )
		}, JSON.stringify(createOrResetUIPasswordRequest.body));
	}


	/**
	* Creates a new user in your tenancy. For conceptual information about users, your tenancy, and other IAM Service components, see Overview of the IAM Service.
	* @param {CreateUserRequest} createUserRequest An instance of CreateUserRequest
	* @method
	*/
	createUser(createUserRequest){
		const params = this.Utils.cleanObject( createUserRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createUserRequest.headers )
		}, JSON.stringify(createUserRequest.body));
	}


	/**
	* Deletes the specified user. The user must not be in any groups.
	* @param {DeleteUserRequest} deleteUserRequest An instance of DeleteUserRequest
	* @method
	*/
	deleteUser(deleteUserRequest){
		const params = this.Utils.cleanObject( deleteUserRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${deleteUserRequest.pathParams.userId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteUserRequest.headers )
		}, JSON.stringify(deleteUserRequest.body));
	}


	/**
	* Gets the specified user's information.
	* @param {GetUserRequest} getUserRequest An instance of GetUserRequest
	* @method
	*/
	getUser(getUserRequest){
		const params = this.Utils.cleanObject( getUserRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${getUserRequest.pathParams.userId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getUserRequest.headers )
		}, JSON.stringify(getUserRequest.body));
	}


	/**
	* Lists the users in your tenancy. You must specify your tenancy's OCID as the value for the compartment ID (remember that the tenancy is simply the root compartment). See Where to Get the Tenancy's OCID and User's OCID.
	* @param {ListUsersRequest} listUsersRequest An instance of ListUsersRequest
	* @method
	*/
	listUsers(listUsersRequest){
		const params = this.Utils.cleanObject( listUsersRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listUsersRequest.headers )
		}, JSON.stringify(listUsersRequest.body));
	}


	/**
	* Updates the description of the specified user.
	* @param {UpdateUserRequest} updateUserRequest An instance of UpdateUserRequest
	* @method
	*/
	updateUser(updateUserRequest){
		const params = this.Utils.cleanObject( updateUserRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateUserRequest.pathParams.userId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateUserRequest.headers )
		}, JSON.stringify(updateUserRequest.body));
	}


	/**
	* Updates the capabilities of the specified user.
	* @param {UpdateUserCapabilitiesRequest} updateUserCapabilitiesRequest An instance of UpdateUserCapabilitiesRequest
	* @method
	*/
	updateUserCapabilities(updateUserCapabilitiesRequest){
		const params = this.Utils.cleanObject( updateUserCapabilitiesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateUserCapabilitiesRequest.pathParams.userId}/capabilities/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateUserCapabilitiesRequest.headers )
		}, JSON.stringify(updateUserCapabilitiesRequest.body));
	}


	/**
	* Updates the state of the specified user.
	* @param {UpdateUserStateRequest} updateUserStateRequest An instance of UpdateUserStateRequest
	* @method
	*/
	updateUserState(updateUserStateRequest){
		const params = this.Utils.cleanObject( updateUserStateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/users/${updateUserStateRequest.pathParams.userId}/state/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateUserStateRequest.headers )
		}, JSON.stringify(updateUserStateRequest.body));
	}


	/**
	* Adds the specified user to the specified group and returns a UserGroupMembership object with its own OCID.
	* @param {AddUserToGroupRequest} addUserToGroupRequest An instance of AddUserToGroupRequest
	* @method
	*/
	addUserToGroup(addUserToGroupRequest){
		const params = this.Utils.cleanObject( addUserToGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/userGroupMemberships/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( addUserToGroupRequest.headers )
		}, JSON.stringify(addUserToGroupRequest.body));
	}


	/**
	* Gets the specified UserGroupMembership's information.
	* @param {GetUserGroupMembershipRequest} getUserGroupMembershipRequest An instance of GetUserGroupMembershipRequest
	* @method
	*/
	getUserGroupMembership(getUserGroupMembershipRequest){
		const params = this.Utils.cleanObject( getUserGroupMembershipRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/userGroupMemberships/${getUserGroupMembershipRequest.pathParams.userGroupMembershipId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getUserGroupMembershipRequest.headers )
		}, JSON.stringify(getUserGroupMembershipRequest.body));
	}


	/**
	* Lists the UserGroupMembership objects in your tenancy. You must specify your tenancy's OCID as the value for the compartment ID (see Where to Get the Tenancy's OCID and User's OCID). You must also then filter the list in one of these ways:
	* @param {ListUserGroupMembershipsRequest} listUserGroupMembershipsRequest An instance of ListUserGroupMembershipsRequest
	* @method
	*/
	listUserGroupMemberships(listUserGroupMembershipsRequest){
		const params = this.Utils.cleanObject( listUserGroupMembershipsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/userGroupMemberships/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listUserGroupMembershipsRequest.headers )
		}, JSON.stringify(listUserGroupMembershipsRequest.body));
	}


	/**
	* Removes a user from a group by deleting the corresponding UserGroupMembership.
	* @param {RemoveUserFromGroupRequest} removeUserFromGroupRequest An instance of RemoveUserFromGroupRequest
	* @method
	*/
	removeUserFromGroup(removeUserFromGroupRequest){
		const params = this.Utils.cleanObject( removeUserFromGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/userGroupMemberships/${removeUserFromGroupRequest.pathParams.userGroupMembershipId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( removeUserFromGroupRequest.headers )
		}, JSON.stringify(removeUserFromGroupRequest.body));
	}


	/**
	* Gets details on a specified work request. The workRequestID is returned in the opc-workrequest-id header for any asynchronous operation in the Identity and Access Management service.
	* @param {GetWorkRequestRequest} getWorkRequestRequest An instance of GetWorkRequestRequest
	* @method
	*/
	getWorkRequest(getWorkRequestRequest){
		const params = this.Utils.cleanObject( getWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/workRequests/${getWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWorkRequestRequest.headers )
		}, JSON.stringify(getWorkRequestRequest.body));
	}


	/**
	* Lists the work requests in compartment.
	* @param {ListWorkRequestsRequest} listWorkRequestsRequest An instance of ListWorkRequestsRequest
	* @method
	*/
	listWorkRequests(listWorkRequestsRequest){
		const params = this.Utils.cleanObject( listWorkRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/workRequests/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestsRequest.headers )
		}, JSON.stringify(listWorkRequestsRequest.body));
	}


}
module.exports = IAMClient;