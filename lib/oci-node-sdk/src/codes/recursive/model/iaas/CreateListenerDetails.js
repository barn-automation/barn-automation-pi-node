/**
* The configuration details for adding a listener to a backend set. For more information on listener configuration, see Managing Load Balancer Listeners.
* @param {string} defaultBackendSetName Minimum: 1 Maximum: 32 The name of the associated backend set. Example: example_backend_set
* @param {number} port The communication port for the listener. Example: 80
* @param {string} protocol The protocol on which the listener accepts connection requests. To get a list of valid protocols, use the {@link ListProtocols} operation. Example: HTTP
* @param {string} name Minimum: 1 Maximum: 255 A friendly name for the listener. It must be unique and it cannot be changed. Avoid entering confidential information. Example: example_listener
* @param {Array<string>} [hostnameNames] An array of hostname resource names.
* @param {string} [pathRouteSetName] Minimum: 1 Maximum: 32 The name of the set of path-based routing rules, {@link PathRouteSet}, applied to this listener's traffic. Example: example_path_route_set
* @param {SSLConfigurationDetails} [sslConfiguration] 
* @param {ConnectionConfiguration} [connectionConfiguration] 
* @param {Array<string>} [ruleSetNames] The names of the {@link rule sets} to apply to the listener. Example: ["example_rule_set"]
* @class CreateListenerDetails
*/
class CreateListenerDetails {
	constructor(defaultBackendSetName, port, protocol, name, hostnameNames, pathRouteSetName, sslConfiguration, connectionConfiguration, ruleSetNames){
		this.defaultBackendSetName = defaultBackendSetName;
		this.port = port;
		this.protocol = protocol;
		this.name = name;
		this.hostnameNames = hostnameNames;
		this.pathRouteSetName = pathRouteSetName;
		this.sslConfiguration = sslConfiguration;
		this.connectionConfiguration = connectionConfiguration;
		this.ruleSetNames = ruleSetNames;
	}
}

module.exports = CreateListenerDetails;
