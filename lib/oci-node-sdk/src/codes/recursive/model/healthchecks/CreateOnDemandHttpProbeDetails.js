/**
* The request body used to create an on-demand HTTP probe.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {Array<string>} targets 
* @param {string} protocol Allowed values are: HTTP HTTPS
* @param {Array<string>} [vantagePointNames] 
* @param {number} [port] The port on which to probe endpoints. If unspecified, probes will use the default port of their protocol.
* @param {number} [timeoutInSeconds] The probe timeout in seconds. Valid values: 10, 20, 30, and 60. The probe timeout must be less than or equal to intervalInSeconds for monitors.
* @param {string} [method] Allowed values are: GET HEAD
* @param {string} [path] The optional URL path to probe, including query parameters.
* @param {Object} [headers] A dictionary of HTTP request headers. Note: Monitors and probes do not support the use of the Authorization HTTP header.
* @class CreateOnDemandHttpProbeDetails
*/
class CreateOnDemandHttpProbeDetails {
	constructor(compartmentId, targets, protocol, vantagePointNames, port, timeoutInSeconds, method, path, headers){
		this.compartmentId = compartmentId;
		this.targets = targets;
		this.protocol = protocol;
		this.vantagePointNames = vantagePointNames;
		this.port = port;
		this.timeoutInSeconds = timeoutInSeconds;
		this.method = method;
		this.path = path;
		this.headers = headers;
	}
}

module.exports = CreateOnDemandHttpProbeDetails;
