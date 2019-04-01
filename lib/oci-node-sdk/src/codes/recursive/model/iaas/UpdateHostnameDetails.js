/**
* The configuration details for updating a virtual hostname. For more information on virtual hostnames, see Managing Request Routing.
* @param {string} [hostname] The virtual hostname to update. For more information about virtual hostname string construction, see {@link https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm#routing|Managing Request Routing}. Example: app.example.com
* @class UpdateHostnameDetails
*/
class UpdateHostnameDetails {
	constructor(hostname){
		this.hostname = hostname;
	}
}

module.exports = UpdateHostnameDetails;
