/**
* The configuration details for updating a load balancer backend set. For more information on backend set configuration, see Managing Backend Sets.
* @param {string} policy The load balancer policy for the backend set. To get a list of available policies, use the {@link ListPolicies} operation. Example: LEAST_CONNECTIONS
* @param {Array<BackendDetails>} backends 
* @param {HealthCheckerDetails} healthChecker 
* @param {SSLConfigurationDetails} [sslConfiguration] 
* @param {SessionPersistenceConfigurationDetails} [sessionPersistenceConfiguration] 
* @class UpdateBackendSetDetails
*/
class UpdateBackendSetDetails {
	constructor(policy, backends, healthChecker, sslConfiguration, sessionPersistenceConfiguration){
		this.policy = policy;
		this.backends = backends;
		this.healthChecker = healthChecker;
		this.sslConfiguration = sslConfiguration;
		this.sessionPersistenceConfiguration = sessionPersistenceConfiguration;
	}
}

module.exports = UpdateBackendSetDetails;
