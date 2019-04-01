/**
* A server that has been set up to answer DNS queries for a zone.
* @param {string} hostname The hostname of the nameserver.
* @class Nameserver
*/
class Nameserver {
	constructor(hostname){
		this.hostname = hostname;
	}
}

module.exports = Nameserver;
