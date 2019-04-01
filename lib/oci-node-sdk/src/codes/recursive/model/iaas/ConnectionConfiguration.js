/**
* Configuration details for the connection between the client and backend servers.
* @param {number} idleTimeout The maximum idle time, in seconds, allowed between two successive receive or two successive send operations between the client and backend servers. A send operation does not reset the timer for receive operations. A receive operation does not reset the timer for send operations. For more information, see {@link https://docs.cloud.oracle.com/Content/Balance/Reference/connectionreuse.htm#ConnectionConfiguration|Connection Configuration}. Example: 1200
* @class ConnectionConfiguration
*/
class ConnectionConfiguration {
	constructor(idleTimeout){
		this.idleTimeout = idleTimeout;
	}
}

module.exports = ConnectionConfiguration;
