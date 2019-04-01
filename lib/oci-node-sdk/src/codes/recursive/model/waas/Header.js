/**
* An HTTP header name and value. You can configure your origin server to only allow requests that contain the custom header values that you specify when action is set to DETECT. If unspecified, defaults to x-jsc-alerts={failed_amount}.
* @param {string} name Minimum: 1 Maximum: 255 The name of the header.
* @param {string} value Minimum: 1 Maximum: 5000 The value of the header.
* @class Header
*/
class Header {
	constructor(name, value){
		this.name = name;
		this.value = value;
	}
}

module.exports = Header;
