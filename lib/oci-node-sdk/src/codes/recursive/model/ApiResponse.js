/**
 * Represents a response from the OCI API
 * @param {number} statusCode the HTTP response statusCode
 * @param {Object} headers the HTTP headers from the response
 * @param {Object} [body] the response body (if applicable)
 * @class ApiResponse
 */
class ApiResponse {
    constructor(statusCode, headers, body) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
}

module.exports = ApiResponse;
