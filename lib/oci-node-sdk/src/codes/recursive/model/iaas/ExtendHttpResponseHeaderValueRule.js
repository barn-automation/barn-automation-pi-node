/**
* An object that represents the action of modifying a response header value. This rule applies only to HTTP listeners.
* @param {string} action Required value: EXTEND_HTTP_RESPONSE_HEADER_VALUE See {@link Rule} for more information.
* @param {string} header Minimum: 1 Maximum: 256 A header name that conforms to RFC 7230. Example: example_header_name
* @param {string} [prefix] Minimum: 1 Maximum: 256 A string to prepend to the header value. The resulting header value must still conform to RFC 7230. Example: example_prefix_value
* @param {string} [suffix] Minimum: 1 Maximum: 256 A string to append to the header value. The resulting header value must still conform to RFC 7230. Example: example_suffix_value
* @class ExtendHttpResponseHeaderValueRule
*/
class ExtendHttpResponseHeaderValueRule {
	constructor(action, header, prefix, suffix){
		this.action = action;
		this.header = header;
		this.prefix = prefix;
		this.suffix = suffix;
	}
}

module.exports = ExtendHttpResponseHeaderValueRule;
