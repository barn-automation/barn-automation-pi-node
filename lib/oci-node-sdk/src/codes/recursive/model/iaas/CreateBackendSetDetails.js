/**
* The configuration details for creating a backend set in a load balancer. For more information on backend set configuration, see Managing Backend Sets.
* @param {string} name Minimum: 1 Maximum: 32 A friendly name for the backend set. It must be unique and it cannot be changed. Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot contain spaces. Avoid entering confidential information. Example: example_backend_set
* @param {string} policy The load balancer policy for the backend set. To get a list of available policies, use the {@link ListPolicies} operation. Example: LEAST_CONNECTIONS
* @param {HealthCheckerDetails} healthChecker 
* @param {Array<BackendDetails>} [backends] 
* @param {SSLConfigurationDetails} [sslConfiguration] 
* @param {SessionPersistenceConfigurationDetails} [sessionPersistenceConfiguration] 
* @class CreateBackendSetDetails
*/
class CreateBackendSetDetails {
	constructor(name, policy, healthChecker, backends, sslConfiguration, sessionPersistenceConfiguration){
		this.name = name;
		this.policy = policy;
		this.healthChecker = healthChecker;
		this.backends = backends;
		this.sslConfiguration = sslConfiguration;
		this.sessionPersistenceConfiguration = sessionPersistenceConfiguration;
	}
}

module.exports = CreateBackendSetDetails;
