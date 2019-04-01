/**
* The configuration details for creating a backend server in a backend set. For more information on backend server configuration, see Managing Backend Servers.
* @param {string} ipAddress The IP address of the backend server. Example: 10.0.0.3
* @param {number} port The communication port for the backend server. Example: 8080
* @param {number} [weight] The load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger proportion of incoming traffic. For example, a server weighted '3' receives 3 times the number of new connections as a server weighted '1'. For more information on load balancing policies, see {@link https://docs.cloud.oracle.com/Content/Balance/Reference/lbpolicies.htm|How Load Balancing Policies Work}. Example: 3
* @param {boolean} [backup] Whether the load balancer should treat this server as a backup unit. If true, the load balancer forwards no ingress traffic to this backend server unless all other backend servers not marked as "backup" fail the health check policy. Example: false
* @param {boolean} [drain] Whether the load balancer should drain this server. Servers marked "drain" receive no new incoming traffic. Example: false
* @param {boolean} [offline] Whether the load balancer should treat this server as offline. Offline servers receive no incoming traffic. Example: false
* @class CreateBackendDetails
*/
class CreateBackendDetails {
	constructor(ipAddress, port, weight, backup, drain, offline){
		this.ipAddress = ipAddress;
		this.port = port;
		this.weight = weight;
		this.backup = backup;
		this.drain = drain;
		this.offline = offline;
	}
}

module.exports = CreateBackendDetails;
