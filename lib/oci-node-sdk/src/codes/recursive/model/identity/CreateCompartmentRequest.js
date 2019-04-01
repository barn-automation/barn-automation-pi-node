/**
 * A class that contains properties necessary to perform CreateCompartment
 * @param {CreateCompartmentDetails} createCompartmentDetails An instance of {@link CreateCompartmentDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class CreateCompartmentRequest
 */
class CreateCompartmentRequest {

	constructor(createCompartmentDetails, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createCompartmentDetails;
		this.createCompartmentDetails = createCompartmentDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateCompartmentRequest;