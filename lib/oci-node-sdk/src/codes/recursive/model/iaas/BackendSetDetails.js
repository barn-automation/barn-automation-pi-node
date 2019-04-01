/**
* The configuration details for a load balancer backend set. For more information on backend set configuration, see Managing Backend Sets.
* @param {string} policy The load balancer policy for the backend set. To get a list of available policies, use the {@link ListPolicies} operation. Example: LEAST_CONNECTIONS
* @param {HealthCheckerDetails} healthChecker 
* @param {Array<BackendDetails>} [backends] 
* @param {SSLConfigurationDetails} [sslConfiguration] 
* @param {SessionPersistenceConfigurationDetails} [sessionPersistenceConfiguration] 
* @class BackendSetDetails
*/
class BackendSetDetails {
	constructor(policy, healthChecker, backends, sslConfiguration, sessionPersistenceConfiguration){
		this.policy = policy;
		this.healthChecker = healthChecker;
		this.backends = backends;
		this.sslConfiguration = sslConfiguration;
		this.sessionPersistenceConfiguration = sessionPersistenceConfiguration;
	}
}

module.exports = BackendSetDetails;
