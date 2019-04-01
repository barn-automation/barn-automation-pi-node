/**
* TCP connection results. All durations are in milliseconds.
* @param {string} [address] The connection IP address.
* @param {number} [port] The port.
* @param {number} [connectDuration] Total connect duration, calculated using connectEnd minus connectStart.
* @param {number} [secureConnectDuration] The duration to secure the connection. This value will be zero for insecure connections. Calculated using connectEnd minus secureConnectionStart.
* @class TcpConnection
*/
class TcpConnection {
	constructor(address, port, connectDuration, secureConnectDuration){
		this.address = address;
		this.port = port;
		this.connectDuration = connectDuration;
		this.secureConnectDuration = secureConnectDuration;
	}
}

module.exports = TcpConnection;
