/**
* The request body used to create an HTTP monitor.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {Array<string>} targets 
* @param {string} protocol Allowed values are: HTTP HTTPS
* @param {string} displayName A user-friendly and mutable name suitable for display in a user interface.
* @param {number} intervalInSeconds The monitor interval in seconds. Valid values: 10, 30, and 60.
* @param {Array<string>} [vantagePointNames] 
* @param {number} [port] The port on which to probe endpoints. If unspecified, probes will use the default port of their protocol.
* @param {number} [timeoutInSeconds] The probe timeout in seconds. Valid values: 10, 20, 30, and 60. The probe timeout must be less than or equal to intervalInSeconds for monitors.
* @param {string} [method] Allowed values are: GET HEAD
* @param {string} [path] The optional URL path to probe, including query parameters.
* @param {Object} [headers] A dictionary of HTTP request headers. Note: Monitors and probes do not support the use of the Authorization HTTP header.
* @param {boolean} [isEnabled] Enables or disables the monitor. Set to 'true' to launch monitoring.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateHttpMonitorDetails
*/
class CreateHttpMonitorDetails {
	constructor(compartmentId, targets, protocol, displayName, intervalInSeconds, vantagePointNames, port, timeoutInSeconds, method, path, headers, isEnabled, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.targets = targets;
		this.protocol = protocol;
		this.displayName = displayName;
		this.intervalInSeconds = intervalInSeconds;
		this.vantagePointNames = vantagePointNames;
		this.port = port;
		this.timeoutInSeconds = timeoutInSeconds;
		this.method = method;
		this.path = path;
		this.headers = headers;
		this.isEnabled = isEnabled;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateHttpMonitorDetails;
