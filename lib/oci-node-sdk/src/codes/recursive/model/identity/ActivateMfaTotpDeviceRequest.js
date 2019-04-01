/**
 * A class that contains properties necessary to perform ActivateMfaTotpDevice
 * @param {string} userId The OCID of the user.
 * @param {string} mfaTotpDeviceId The OCID of the MFA TOTP device.
 * @param {ActivateMfaTotpDeviceDetails} activateMfaTotpDeviceDetails An instance of {@link ActivateMfaTotpDeviceDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class ActivateMfaTotpDeviceRequest
 */
class ActivateMfaTotpDeviceRequest {

	constructor(userId, mfaTotpDeviceId, activateMfaTotpDeviceDetails, ifMatch, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = activateMfaTotpDeviceDetails;
		this.userId = userId;
		this.mfaTotpDeviceId = mfaTotpDeviceId;
		this.activateMfaTotpDeviceDetails = activateMfaTotpDeviceDetails;
		this.ifMatch = ifMatch;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['mfaTotpDeviceId'] = this.mfaTotpDeviceId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ActivateMfaTotpDeviceRequest;