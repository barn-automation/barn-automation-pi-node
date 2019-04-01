const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Oracle Cloud My Services API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class CloudServiceClient
 * @extends AbstractApiClient
 */
class CloudServiceClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://itra.${this.region}.oraclecloud.com`;
	}


	/**
	* Returns a Cloud Account Resource
	* @param {GetCloudAccountRequest} getCloudAccountRequest An instance of GetCloudAccountRequest
	* @method
	*/
	getCloudAccount(getCloudAccountRequest){
		const params = this.Utils.cleanObject( getCloudAccountRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getCloudAccountRequest.pathParams.domain}/myservices/api/v1/cloudAccounts/${getCloudAccountRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCloudAccountRequest.headers )
		}, JSON.stringify(getCloudAccountRequest.body));
	}


	/**
	* Returns a Cloud Account resource collection, default ordering is "id:asc"
	* @param {GetCloudAccountsRequest} getCloudAccountsRequest An instance of GetCloudAccountsRequest
	* @method
	*/
	getCloudAccounts(getCloudAccountsRequest){
		const params = this.Utils.cleanObject( getCloudAccountsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getCloudAccountsRequest.pathParams.domain}/myservices/api/v1/cloudAccounts${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCloudAccountsRequest.headers )
		}, JSON.stringify(getCloudAccountsRequest.body));
	}


	/**
	* Retrieves an operation by its id.
	* @param {GetOperationRequest} getOperationRequest An instance of GetOperationRequest
	* @method
	*/
	getOperation(getOperationRequest){
		const params = this.Utils.cleanObject( getOperationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getOperationRequest.pathParams.domain}/myservices/api/v1/operations/${getOperationRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getOperationRequest.headers )
		}, JSON.stringify(getOperationRequest.body));
	}


	/**
	* Update an operation
	* @param {PutOperationRequest} putOperationRequest An instance of PutOperationRequest
	* @method
	*/
	putOperation(putOperationRequest){
		const params = this.Utils.cleanObject( putOperationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${putOperationRequest.pathParams.domain}/myservices/api/v1/operations/${putOperationRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( putOperationRequest.headers )
		}, JSON.stringify(putOperationRequest.body));
	}


	/**
	* Returns operation resource collection, default ordering is "id:asc"
	* @param {GetOperationsRequest} getOperationsRequest An instance of GetOperationsRequest
	* @method
	*/
	getOperations(getOperationsRequest){
		const params = this.Utils.cleanObject( getOperationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getOperationsRequest.pathParams.domain}/myservices/api/v1/operations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getOperationsRequest.headers )
		}, JSON.stringify(getOperationsRequest.body));
	}


	/**
	* The operations resource is a mean to send and monitor asynchronous operations to various Oracle Cloud Service Components. The operations consist of items defined in the operationItemDefinitions resource.
	* @param {PostOperationsRequest} postOperationsRequest An instance of PostOperationsRequest
	* @method
	*/
	postOperations(postOperationsRequest){
		const params = this.Utils.cleanObject( postOperationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${postOperationsRequest.pathParams.domain}/myservices/api/v1/operations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( postOperationsRequest.headers )
		}, JSON.stringify(postOperationsRequest.body));
	}


	/**
	* Returns a Purchase Entitlement
	* @param {GetPurchaseEntitlementRequest} getPurchaseEntitlementRequest An instance of GetPurchaseEntitlementRequest
	* @method
	*/
	getPurchaseEntitlement(getPurchaseEntitlementRequest){
		const params = this.Utils.cleanObject( getPurchaseEntitlementRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getPurchaseEntitlementRequest.pathParams.domain}/myservices/api/v1/purchaseEntitlements/${getPurchaseEntitlementRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPurchaseEntitlementRequest.headers )
		}, JSON.stringify(getPurchaseEntitlementRequest.body));
	}


	/**
	* Purchase Entitlement resource collection, default ordering is "id:asc"
	* @param {GetPurchaseEntitlementsRequest} getPurchaseEntitlementsRequest An instance of GetPurchaseEntitlementsRequest
	* @method
	*/
	getPurchaseEntitlements(getPurchaseEntitlementsRequest){
		const params = this.Utils.cleanObject( getPurchaseEntitlementsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getPurchaseEntitlementsRequest.pathParams.domain}/myservices/api/v1/purchaseEntitlements${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPurchaseEntitlementsRequest.headers )
		}, JSON.stringify(getPurchaseEntitlementsRequest.body));
	}


	/**
	* Deletes a SEExadataSecurityGroup resource.
	* @param {DeleteSecurityGroupRequest} deleteSecurityGroupRequest An instance of DeleteSecurityGroupRequest
	* @method
	*/
	deleteSecurityGroup(deleteSecurityGroupRequest){
		const params = this.Utils.cleanObject( deleteSecurityGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${deleteSecurityGroupRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${deleteSecurityGroupRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${deleteSecurityGroupRequest.pathParams.serviceConfigurationId}/securityGroups/${deleteSecurityGroupRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSecurityGroupRequest.headers )
		}, JSON.stringify(deleteSecurityGroupRequest.body));
	}


	/**
	* Returns SEExadataSecurityGroup resource
	* @param {GetSEExadataSecurityGroupRequest} getSEExadataSecurityGroupRequest An instance of GetSEExadataSecurityGroupRequest
	* @method
	*/
	getSEExadataSecurityGroup(getSEExadataSecurityGroupRequest){
		const params = this.Utils.cleanObject( getSEExadataSecurityGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSEExadataSecurityGroupRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${getSEExadataSecurityGroupRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${getSEExadataSecurityGroupRequest.pathParams.serviceConfigurationId}/securityGroups/${getSEExadataSecurityGroupRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSEExadataSecurityGroupRequest.headers )
		}, JSON.stringify(getSEExadataSecurityGroupRequest.body));
	}


	/**
	* Modify an existing Security Group
	* @param {PutSEExadataSecurityGroupRequest} putSEExadataSecurityGroupRequest An instance of PutSEExadataSecurityGroupRequest
	* @method
	*/
	putSEExadataSecurityGroup(putSEExadataSecurityGroupRequest){
		const params = this.Utils.cleanObject( putSEExadataSecurityGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${putSEExadataSecurityGroupRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${putSEExadataSecurityGroupRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${putSEExadataSecurityGroupRequest.pathParams.serviceConfigurationId}/securityGroups/${putSEExadataSecurityGroupRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( putSEExadataSecurityGroupRequest.headers )
		}, JSON.stringify(putSEExadataSecurityGroupRequest.body));
	}


	/**
	* Returns SEExadataSecurityGroup resource collection
	* @param {GetSEExadataSecurityGroupsRequest} getSEExadataSecurityGroupsRequest An instance of GetSEExadataSecurityGroupsRequest
	* @method
	*/
	getSEExadataSecurityGroups(getSEExadataSecurityGroupsRequest){
		const params = this.Utils.cleanObject( getSEExadataSecurityGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSEExadataSecurityGroupsRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${getSEExadataSecurityGroupsRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${getSEExadataSecurityGroupsRequest.pathParams.serviceConfigurationId}/securityGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSEExadataSecurityGroupsRequest.headers )
		}, JSON.stringify(getSEExadataSecurityGroupsRequest.body));
	}


	/**
	* Create a new Security Group
	* @param {PostSEExadataSecurityGroupsRequest} postSEExadataSecurityGroupsRequest An instance of PostSEExadataSecurityGroupsRequest
	* @method
	*/
	postSEExadataSecurityGroups(postSEExadataSecurityGroupsRequest){
		const params = this.Utils.cleanObject( postSEExadataSecurityGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${postSEExadataSecurityGroupsRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${postSEExadataSecurityGroupsRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${postSEExadataSecurityGroupsRequest.pathParams.serviceConfigurationId}/securityGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( postSEExadataSecurityGroupsRequest.headers )
		}, JSON.stringify(postSEExadataSecurityGroupsRequest.body));
	}


	/**
	* Service Definition resource, contains metadata about Purchase Entitlements, Service Entitlements and Service Instances.
	* @param {GetServiceDefinitionRequest} getServiceDefinitionRequest An instance of GetServiceDefinitionRequest
	* @method
	*/
	getServiceDefinition(getServiceDefinitionRequest){
		const params = this.Utils.cleanObject( getServiceDefinitionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceDefinitionRequest.pathParams.domain}/myservices/api/v1/serviceDefinitions/${getServiceDefinitionRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceDefinitionRequest.headers )
		}, JSON.stringify(getServiceDefinitionRequest.body));
	}


	/**
	* Service Definition resource, contains metadata about Purchase Entitlements, Service Entitlements and Service Instances, default ordering is "name:asc"
	* @param {GetServiceDefinitionsRequest} getServiceDefinitionsRequest An instance of GetServiceDefinitionsRequest
	* @method
	*/
	getServiceDefinitions(getServiceDefinitionsRequest){
		const params = this.Utils.cleanObject( getServiceDefinitionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceDefinitionsRequest.pathParams.domain}/myservices/api/v1/serviceDefinitions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceDefinitionsRequest.headers )
		}, JSON.stringify(getServiceDefinitionsRequest.body));
	}


	/**
	* Returns a Service Entitlement Resource
	* @param {GetServiceEntitlementRequest} getServiceEntitlementRequest An instance of GetServiceEntitlementRequest
	* @method
	*/
	getServiceEntitlement(getServiceEntitlementRequest){
		const params = this.Utils.cleanObject( getServiceEntitlementRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceEntitlementRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${getServiceEntitlementRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceEntitlementRequest.headers )
		}, JSON.stringify(getServiceEntitlementRequest.body));
	}


	/**
	* Returns a Service Entitlement resource collection, default ordering is "id:asc"
	* @param {GetServiceEntitlementsRequest} getServiceEntitlementsRequest An instance of GetServiceEntitlementsRequest
	* @method
	*/
	getServiceEntitlements(getServiceEntitlementsRequest){
		const params = this.Utils.cleanObject( getServiceEntitlementsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceEntitlementsRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceEntitlementsRequest.headers )
		}, JSON.stringify(getServiceEntitlementsRequest.body));
	}


	/**
	* Returns a Service Instance Resource
	* @param {GetServiceInstanceRequest} getServiceInstanceRequest An instance of GetServiceInstanceRequest
	* @method
	*/
	getServiceInstance(getServiceInstanceRequest){
		const params = this.Utils.cleanObject( getServiceInstanceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceInstanceRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getServiceInstanceRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceInstanceRequest.headers )
		}, JSON.stringify(getServiceInstanceRequest.body));
	}


	/**
	* Returns a Service Instance resource collection, default ordering is "id:asc"
	* @param {GetServiceInstancesRequest} getServiceInstancesRequest An instance of GetServiceInstancesRequest
	* @method
	*/
	getServiceInstances(getServiceInstancesRequest){
		const params = this.Utils.cleanObject( getServiceInstancesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getServiceInstancesRequest.pathParams.domain}/myservices/api/v1/serviceInstances${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceInstancesRequest.headers )
		}, JSON.stringify(getServiceInstancesRequest.body));
	}


	/**
	* Returns SEServiceConfiguration resource
	* @param {GetSEServiceConfigurationRequest} getSEServiceConfigurationRequest An instance of GetSEServiceConfigurationRequest
	* @method
	*/
	getSEServiceConfiguration(getSEServiceConfigurationRequest){
		const params = this.Utils.cleanObject( getSEServiceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSEServiceConfigurationRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${getSEServiceConfigurationRequest.pathParams.serviceEntitlementId}/serviceConfigurations/${getSEServiceConfigurationRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSEServiceConfigurationRequest.headers )
		}, JSON.stringify(getSEServiceConfigurationRequest.body));
	}


	/**
	* Returns SEServiceConfigurations resource collection
	* @param {GetSEServiceConfigurationsRequest} getSEServiceConfigurationsRequest An instance of GetSEServiceConfigurationsRequest
	* @method
	*/
	getSEServiceConfigurations(getSEServiceConfigurationsRequest){
		const params = this.Utils.cleanObject( getSEServiceConfigurationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSEServiceConfigurationsRequest.pathParams.domain}/myservices/api/v1/serviceEntitlements/${getSEServiceConfigurationsRequest.pathParams.serviceEntitlementId}/serviceConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSEServiceConfigurationsRequest.headers )
		}, JSON.stringify(getSEServiceConfigurationsRequest.body));
	}


	/**
	* Returns SIExadataBursting resource
	* @param {GetSIExadataBurstingRequest} getSIExadataBurstingRequest An instance of GetSIExadataBurstingRequest
	* @method
	*/
	getSIExadataBursting(getSIExadataBurstingRequest){
		const params = this.Utils.cleanObject( getSIExadataBurstingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSIExadataBurstingRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getSIExadataBurstingRequest.pathParams.serviceInstanceId}/serviceConfigurations/${getSIExadataBurstingRequest.pathParams.serviceConfigurationId}/bursting${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSIExadataBurstingRequest.headers )
		}, JSON.stringify(getSIExadataBurstingRequest.body));
	}


	/**
	* Modify bursting configuration
	* @param {PutSIExadataBurstingRequest} putSIExadataBurstingRequest An instance of PutSIExadataBurstingRequest
	* @method
	*/
	putSIExadataBursting(putSIExadataBurstingRequest){
		const params = this.Utils.cleanObject( putSIExadataBurstingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${putSIExadataBurstingRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${putSIExadataBurstingRequest.pathParams.serviceInstanceId}/serviceConfigurations/${putSIExadataBurstingRequest.pathParams.serviceConfigurationId}/bursting${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( putSIExadataBurstingRequest.headers )
		}, JSON.stringify(putSIExadataBurstingRequest.body));
	}


	/**
	* Remove a ExadataSecurityGroup assignment.
	* @param {DeleteSecurityGroupAssignmentRequest} deleteSecurityGroupAssignmentRequest An instance of DeleteSecurityGroupAssignmentRequest
	* @method
	*/
	deleteSecurityGroupAssignment(deleteSecurityGroupAssignmentRequest){
		const params = this.Utils.cleanObject( deleteSecurityGroupAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${deleteSecurityGroupAssignmentRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${deleteSecurityGroupAssignmentRequest.pathParams.serviceInstanceId}/serviceConfigurations/${deleteSecurityGroupAssignmentRequest.pathParams.serviceConfigurationId}/securityGroupAssignment/${deleteSecurityGroupAssignmentRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSecurityGroupAssignmentRequest.headers )
		}, JSON.stringify(deleteSecurityGroupAssignmentRequest.body));
	}


	/**
	* Returns ExadataSecurityGroupAssignment resource
	* @param {GetSIExadataSecurityGroupAssignmentRequest} getSIExadataSecurityGroupAssignmentRequest An instance of GetSIExadataSecurityGroupAssignmentRequest
	* @method
	*/
	getSIExadataSecurityGroupAssignment(getSIExadataSecurityGroupAssignmentRequest){
		const params = this.Utils.cleanObject( getSIExadataSecurityGroupAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSIExadataSecurityGroupAssignmentRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getSIExadataSecurityGroupAssignmentRequest.pathParams.serviceInstanceId}/serviceConfigurations/${getSIExadataSecurityGroupAssignmentRequest.pathParams.serviceConfigurationId}/securityGroupAssignment/${getSIExadataSecurityGroupAssignmentRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSIExadataSecurityGroupAssignmentRequest.headers )
		}, JSON.stringify(getSIExadataSecurityGroupAssignmentRequest.body));
	}


	/**
	* Returns SIExadataSecurityGroupAssignment resource collection
	* @param {GetSIExadataSecurityGroupAssignmentsRequest} getSIExadataSecurityGroupAssignmentsRequest An instance of GetSIExadataSecurityGroupAssignmentsRequest
	* @method
	*/
	getSIExadataSecurityGroupAssignments(getSIExadataSecurityGroupAssignmentsRequest){
		const params = this.Utils.cleanObject( getSIExadataSecurityGroupAssignmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSIExadataSecurityGroupAssignmentsRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getSIExadataSecurityGroupAssignmentsRequest.pathParams.serviceInstanceId}/serviceConfigurations/${getSIExadataSecurityGroupAssignmentsRequest.pathParams.serviceConfigurationId}/securityGroupAssignments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSIExadataSecurityGroupAssignmentsRequest.headers )
		}, JSON.stringify(getSIExadataSecurityGroupAssignmentsRequest.body));
	}


	/**
	* Create a new Security Group Assignment
	* @param {PostSIExadataSecurityGroupAssignmentsRequest} postSIExadataSecurityGroupAssignmentsRequest An instance of PostSIExadataSecurityGroupAssignmentsRequest
	* @method
	*/
	postSIExadataSecurityGroupAssignments(postSIExadataSecurityGroupAssignmentsRequest){
		const params = this.Utils.cleanObject( postSIExadataSecurityGroupAssignmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${postSIExadataSecurityGroupAssignmentsRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${postSIExadataSecurityGroupAssignmentsRequest.pathParams.serviceInstanceId}/serviceConfigurations/${postSIExadataSecurityGroupAssignmentsRequest.pathParams.serviceConfigurationId}/securityGroupAssignments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( postSIExadataSecurityGroupAssignmentsRequest.headers )
		}, JSON.stringify(postSIExadataSecurityGroupAssignmentsRequest.body));
	}


	/**
	* Returns SIServiceConfiguration resource
	* @param {GetSIServiceConfigurationRequest} getSIServiceConfigurationRequest An instance of GetSIServiceConfigurationRequest
	* @method
	*/
	getSIServiceConfiguration(getSIServiceConfigurationRequest){
		const params = this.Utils.cleanObject( getSIServiceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSIServiceConfigurationRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getSIServiceConfigurationRequest.pathParams.serviceInstanceId}/serviceConfigurations/${getSIServiceConfigurationRequest.pathParams.id}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSIServiceConfigurationRequest.headers )
		}, JSON.stringify(getSIServiceConfigurationRequest.body));
	}


	/**
	* Returns SIServiceConfigurations resource collection
	* @param {GetSIServiceConfigurationsRequest} getSIServiceConfigurationsRequest An instance of GetSIServiceConfigurationsRequest
	* @method
	*/
	getSIServiceConfigurations(getSIServiceConfigurationsRequest){
		const params = this.Utils.cleanObject( getSIServiceConfigurationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/itas/${getSIServiceConfigurationsRequest.pathParams.domain}/myservices/api/v1/serviceInstances/${getSIServiceConfigurationsRequest.pathParams.serviceInstanceId}/serviceConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSIServiceConfigurationsRequest.headers )
		}, JSON.stringify(getSIServiceConfigurationsRequest.body));
	}


}
module.exports = CloudServiceClient;