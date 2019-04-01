/**
* The details of a hostname resource associated with a load balancer.
* @param {string} name The name of the hostname resource. Example: example_hostname_001
* @param {string} hostname A virtual hostname. For more information about virtual hostname string construction, see {@link https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm#routing|Managing Request Routing}. Example: app.example.com
* @class HostnameDetails
*/
class HostnameDetails {
	constructor(name, hostname){
		this.name = name;
		this.hostname = hostname;
	}
}

module.exports = HostnameDetails;
