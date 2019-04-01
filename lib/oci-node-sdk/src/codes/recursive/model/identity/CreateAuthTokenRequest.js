/**
 * A class that contains properties necessary to perform CreateAuthToken
 * @param {string} userId The OCID of the user.
 * @param {CreateAuthTokenDetails} createAuthTokenDetails An instance of {@link CreateAuthTokenDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class CreateAuthTokenRequest
 */
class CreateAuthTokenRequest {

	constructor(userId, createAuthTokenDetails, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createAuthTokenDetails;
		this.userId = userId;
		this.createAuthTokenDetails = createAuthTokenDetails;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['userId'] = this.userId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateAuthTokenRequest;