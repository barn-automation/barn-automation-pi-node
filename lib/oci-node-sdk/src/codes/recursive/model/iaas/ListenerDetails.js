/**
* The listener's configuration details.
* @param {string} defaultBackendSetName Minimum: 1 Maximum: 32 The name of the associated backend set. Example: example_backend_set
* @param {number} port The communication port for the listener. Example: 80
* @param {string} protocol The protocol on which the listener accepts connection requests. To get a list of valid protocols, use the {@link ListProtocols} operation. Example: HTTP
* @param {Array<string>} [hostnameNames] An array of hostname resource names.
* @param {string} [pathRouteSetName] Minimum: 1 Maximum: 32 The name of the set of path-based routing rules, {@link PathRouteSet}, applied to this listener's traffic. Example: example_path_route_set
* @param {SSLConfigurationDetails} [sslConfiguration] 
* @param {ConnectionConfiguration} [connectionConfiguration] 
* @param {Array<string>} [ruleSetNames] The names of the {@link rule sets} to apply to the listener. Example: ["example_rule_set"]
* @class ListenerDetails
*/
class ListenerDetails {
	constructor(defaultBackendSetName, port, protocol, hostnameNames, pathRouteSetName, sslConfiguration, connectionConfiguration, ruleSetNames){
		this.defaultBackendSetName = defaultBackendSetName;
		this.port = port;
		this.protocol = protocol;
		this.hostnameNames = hostnameNames;
		this.pathRouteSetName = pathRouteSetName;
		this.sslConfiguration = sslConfiguration;
		this.connectionConfiguration = connectionConfiguration;
		this.ruleSetNames = ruleSetNames;
	}
}

module.exports = ListenerDetails;
