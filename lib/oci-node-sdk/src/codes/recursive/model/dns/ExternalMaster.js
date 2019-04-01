/**
* An external master name server used as the source of zone data.
* @param {string} address The server's IP address (IPv4 or IPv6).
* @param {number} [port] The server's port. Port value must be a value of 53, otherwise omit the port value.
* @param {TSIG} [tsig] 
* @class ExternalMaster
*/
class ExternalMaster {
	constructor(address, port, tsig){
		this.address = address;
		this.port = port;
		this.tsig = tsig;
	}
}

module.exports = ExternalMaster;
