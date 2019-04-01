const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Autoscaling API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class AutoScalingClient
 * @extends AbstractApiClient
 */
class AutoScalingClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://autoscaling.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates an autoscaling configuration.
	* @param {CreateAutoScalingConfigurationRequest} createAutoScalingConfigurationRequest An instance of CreateAutoScalingConfigurationRequest
	* @method
	*/
	createAutoScalingConfiguration(createAutoScalingConfigurationRequest){
		const params = this.Utils.cleanObject( createAutoScalingConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutoScalingConfigurationRequest.headers )
		}, JSON.stringify(createAutoScalingConfigurationRequest.body));
	}


	/**
	* Deletes an autoscaling configuration.
	* @param {DeleteAutoScalingConfigurationRequest} deleteAutoScalingConfigurationRequest An instance of DeleteAutoScalingConfigurationRequest
	* @method
	*/
	deleteAutoScalingConfiguration(deleteAutoScalingConfigurationRequest){
		const params = this.Utils.cleanObject( deleteAutoScalingConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${deleteAutoScalingConfigurationRequest.pathParams.autoScalingConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAutoScalingConfigurationRequest.headers )
		}, JSON.stringify(deleteAutoScalingConfigurationRequest.body));
	}


	/**
	* Gets information about the specified autoscaling configuration.
	* @param {GetAutoScalingConfigurationRequest} getAutoScalingConfigurationRequest An instance of GetAutoScalingConfigurationRequest
	* @method
	*/
	getAutoScalingConfiguration(getAutoScalingConfigurationRequest){
		const params = this.Utils.cleanObject( getAutoScalingConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${getAutoScalingConfigurationRequest.pathParams.autoScalingConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutoScalingConfigurationRequest.headers )
		}, JSON.stringify(getAutoScalingConfigurationRequest.body));
	}


	/**
	* Updates certain fields on the specified autoscaling configuration, such as the name, the cooldown period, and whether the autoscaling configuration is enabled.
	* @param {UpdateAutoScalingConfigurationRequest} updateAutoScalingConfigurationRequest An instance of UpdateAutoScalingConfigurationRequest
	* @method
	*/
	updateAutoScalingConfiguration(updateAutoScalingConfigurationRequest){
		const params = this.Utils.cleanObject( updateAutoScalingConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${updateAutoScalingConfigurationRequest.pathParams.autoScalingConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAutoScalingConfigurationRequest.headers )
		}, JSON.stringify(updateAutoScalingConfigurationRequest.body));
	}


	/**
	* Lists autoscaling configurations in the specifed compartment.
	* @param {ListAutoScalingConfigurationsRequest} listAutoScalingConfigurationsRequest An instance of ListAutoScalingConfigurationsRequest
	* @method
	*/
	listAutoScalingConfigurations(listAutoScalingConfigurationsRequest){
		const params = this.Utils.cleanObject( listAutoScalingConfigurationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutoScalingConfigurationsRequest.headers )
		}, JSON.stringify(listAutoScalingConfigurationsRequest.body));
	}


	/**
	* Creates an autoscaling policy for the specified autoscaling configuration.
	* @param {CreateAutoScalingPolicyRequest} createAutoScalingPolicyRequest An instance of CreateAutoScalingPolicyRequest
	* @method
	*/
	createAutoScalingPolicy(createAutoScalingPolicyRequest){
		const params = this.Utils.cleanObject( createAutoScalingPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${createAutoScalingPolicyRequest.pathParams.autoScalingConfigurationId}/policies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutoScalingPolicyRequest.headers )
		}, JSON.stringify(createAutoScalingPolicyRequest.body));
	}


	/**
	* Deletes an autoscaling policy for the specified autoscaling configuration.
	* @param {DeleteAutoScalingPolicyRequest} deleteAutoScalingPolicyRequest An instance of DeleteAutoScalingPolicyRequest
	* @method
	*/
	deleteAutoScalingPolicy(deleteAutoScalingPolicyRequest){
		const params = this.Utils.cleanObject( deleteAutoScalingPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${deleteAutoScalingPolicyRequest.pathParams.autoScalingConfigurationId}/policies/${deleteAutoScalingPolicyRequest.pathParams.autoScalingPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAutoScalingPolicyRequest.headers )
		}, JSON.stringify(deleteAutoScalingPolicyRequest.body));
	}


	/**
	* Gets information about the specified autoscaling policy in the specified autoscaling configuration.
	* @param {GetAutoScalingPolicyRequest} getAutoScalingPolicyRequest An instance of GetAutoScalingPolicyRequest
	* @method
	*/
	getAutoScalingPolicy(getAutoScalingPolicyRequest){
		const params = this.Utils.cleanObject( getAutoScalingPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${getAutoScalingPolicyRequest.pathParams.autoScalingConfigurationId}/policies/${getAutoScalingPolicyRequest.pathParams.autoScalingPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutoScalingPolicyRequest.headers )
		}, JSON.stringify(getAutoScalingPolicyRequest.body));
	}


	/**
	* Updates an autoscaling policy in the specified autoscaling configuration.
	* @param {UpdateAutoScalingPolicyRequest} updateAutoScalingPolicyRequest An instance of UpdateAutoScalingPolicyRequest
	* @method
	*/
	updateAutoScalingPolicy(updateAutoScalingPolicyRequest){
		const params = this.Utils.cleanObject( updateAutoScalingPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${updateAutoScalingPolicyRequest.pathParams.autoScalingConfigurationId}/policies/${updateAutoScalingPolicyRequest.pathParams.autoScalingPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAutoScalingPolicyRequest.headers )
		}, JSON.stringify(updateAutoScalingPolicyRequest.body));
	}


	/**
	* Lists the autoscaling policies in the specified autoscaling configuration.
	* @param {ListAutoScalingPoliciesRequest} listAutoScalingPoliciesRequest An instance of ListAutoScalingPoliciesRequest
	* @method
	*/
	listAutoScalingPolicies(listAutoScalingPoliciesRequest){
		const params = this.Utils.cleanObject( listAutoScalingPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181001/autoScalingConfigurations/${listAutoScalingPoliciesRequest.pathParams.autoScalingConfigurationId}/policies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutoScalingPoliciesRequest.headers )
		}, JSON.stringify(listAutoScalingPoliciesRequest.body));
	}


}
module.exports = AutoScalingClient;