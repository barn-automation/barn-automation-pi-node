/**
* The request body used to create an on-demand ping probe.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {Array<string>} targets 
* @param {string} protocol Allowed values are: ICMP TCP
* @param {Array<string>} [vantagePointNames] 
* @param {number} [port] The port on which to probe endpoints. If unspecified, probes will use the default port of their protocol.
* @param {number} [timeoutInSeconds] The probe timeout in seconds. Valid values: 10, 20, 30, and 60. The probe timeout must be less than or equal to intervalInSeconds for monitors.
* @class CreateOnDemandPingProbeDetails
*/
class CreateOnDemandPingProbeDetails {
	constructor(compartmentId, targets, protocol, vantagePointNames, port, timeoutInSeconds){
		this.compartmentId = compartmentId;
		this.targets = targets;
		this.protocol = protocol;
		this.vantagePointNames = vantagePointNames;
		this.port = port;
		this.timeoutInSeconds = timeoutInSeconds;
	}
}

module.exports = CreateOnDemandPingProbeDetails;
