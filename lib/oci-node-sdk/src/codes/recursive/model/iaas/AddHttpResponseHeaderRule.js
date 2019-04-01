/**
* An object that represents the action of adding a header to a response. This rule applies only to HTTP listeners.
* @param {string} action Required value: ADD_HTTP_RESPONSE_HEADER See {@link Rule} for more information.
* @param {string} header Minimum: 1 Maximum: 256 A header name that conforms to RFC 7230. Example: example_header_name
* @param {string} value Minimum: 1 Maximum: 256 A header value that conforms to RFC 7230. Example: example_value
* @class AddHttpResponseHeaderRule
*/
class AddHttpResponseHeaderRule {
	constructor(action, header, value){
		this.action = action;
		this.header = header;
		this.value = value;
	}
}

module.exports = AddHttpResponseHeaderRule;
