/**
* The network connection results.
* @param {string} [address] The connection IP address.
* @param {number} [port] The port.
* @class Connection
*/
class Connection {
	constructor(address, port){
		this.address = address;
		this.port = port;
	}
}

module.exports = Connection;
