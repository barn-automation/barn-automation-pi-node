/**
* The properties that define an upstream error while managing a node.
* @param {string} code A short error code that defines the upstream error, meant for programmatic parsing. See {@link https://docs.us-phoenix-1.oraclecloud.com/Content/API/References/apierrors.htm|API Errors}.
* @param {string} message A human-readable error string of the upstream error.
* @param {string} [status] The status of the HTTP response encountered in the upstream error.
* @param {string} [opcRequestId] Unique Oracle-assigned identifier for the upstream request. If you need to contact Oracle about a particular upstream request, please provide the request ID.
* @class NodeError
*/
class NodeError {
	constructor(code, message, status, opcRequestId){
		this.code = code;
		this.message = message;
		this.status = status;
		this.opcRequestId = opcRequestId;
	}
}

module.exports = NodeError;
