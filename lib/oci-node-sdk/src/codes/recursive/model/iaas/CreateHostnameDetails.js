/**
* The details of the hostname resource to add to a load balancer.
* @param {string} name A friendly name for the hostname resource. It must be unique and it cannot be changed. Avoid entering confidential information. Example: example_hostname_001
* @param {string} hostname A virtual hostname. For more information about virtual hostname string construction, see {@link https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm#routing|Managing Request Routing}. Example: app.example.com
* @class CreateHostnameDetails
*/
class CreateHostnameDetails {
	constructor(name, hostname){
		this.name = name;
		this.hostname = hostname;
	}
}

module.exports = CreateHostnameDetails;
