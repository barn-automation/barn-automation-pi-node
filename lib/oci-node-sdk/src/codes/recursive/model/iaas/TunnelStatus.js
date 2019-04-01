/**
* Specific connection details for an IPSec tunnel.
* @param {string} ipAddress Minimum: 1 Maximum: 46 The IP address of Oracle's VPN headend. Example: 129.146.17.50
* @param {string} [lifecycleState] The tunnel's current state. Allowed values are: UP DOWN DOWN_FOR_MAINTENANCE
* @param {string} [timeCreated] The date and time the IPSec connection was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @param {string} [timeStateModified] When the state of the tunnel last changed, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @class TunnelStatus
*/
class TunnelStatus {
	constructor(ipAddress, lifecycleState, timeCreated, timeStateModified){
		this.ipAddress = ipAddress;
		this.lifecycleState = lifecycleState;
		this.timeCreated = timeCreated;
		this.timeStateModified = timeStateModified;
	}
}

module.exports = TunnelStatus;
