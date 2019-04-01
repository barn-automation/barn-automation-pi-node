/**
* Specific connection details for an IPSec tunnel.
* @param {string} ipAddress Minimum: 1 Maximum: 46 The IP address of Oracle's VPN headend. Example: 129.146.17.50
* @param {string} sharedSecret Minimum: 1 Maximum: 255 The shared secret of the IPSec tunnel. Example: vFG2IF6TWq4UToUiLSRDoJEUs6j1c.p8G.dVQxiMfMO0yXMLi.lZTbYIWhGu4V8o
* @param {string} [timeCreated] The date and time the IPSec connection was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @class TunnelConfig
*/
class TunnelConfig {
	constructor(ipAddress, sharedSecret, timeCreated){
		this.ipAddress = ipAddress;
		this.sharedSecret = sharedSecret;
		this.timeCreated = timeCreated;
	}
}

module.exports = TunnelConfig;
