/**
* An object that represents an action to apply to a listener.
* @param {string} action Allowed values are: ADD_HTTP_REQUEST_HEADER (See {@link AddHttpRequestHeaderRule}) EXTEND_HTTP_REQUEST_HEADER_VALUE (See {@link ExtendHttpRequestHeaderValueRule}) REMOVE_HTTP_REQUEST_HEADER (See {@link RemoveHttpRequestHeaderRule}) ADD_HTTP_RESPONSE_HEADER (See {@link AddHttpResponseHeaderRule}) EXTEND_HTTP_RESPONSE_HEADER_VALUE (See {@link ExtendHttpResponseHeaderValueRule}) REMOVE_HTTP_RESPONSE_HEADER (See {@link RemoveHttpResponseHeaderRule})
* @class Rule
*/
class Rule {
	constructor(action){
		this.action = action;
	}
}

module.exports = Rule;
