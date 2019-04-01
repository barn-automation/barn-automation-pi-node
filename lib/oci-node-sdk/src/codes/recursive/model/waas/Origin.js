/**
* A detailed description of your web application's origin host server. An origin must be defined to set up WAF rules.
* @param {string} uri The URI of the origin. Does not support paths. Port numbers should be specified in the httpPort and httpsPort fields.
* @param {number} [httpPort] The HTTP port on the origin that the web application listens on. If unspecified, defaults to 80.
* @param {number} [httpsPort] The HTTPS port on the origin that the web application listens on. If unspecified, defaults to 443.
* @param {Array<Header>} [customHeaders] A list of HTTP headers to forward to your origin.
* @class Origin
*/
class Origin {
	constructor(uri, httpPort, httpsPort, customHeaders){
		this.uri = uri;
		this.httpPort = httpPort;
		this.httpsPort = httpsPort;
		this.customHeaders = customHeaders;
	}
}

module.exports = Origin;
