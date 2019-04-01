/**
 * A class that contains properties necessary to perform CreateOnDemandHttpProbe
 * @param {CreateOnDemandHttpProbeDetails} createOnDemandHttpProbeDetails An instance of {@link CreateOnDemandHttpProbeDetails}
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreateOnDemandHttpProbeRequest
 */
class CreateOnDemandHttpProbeRequest {

	constructor(createOnDemandHttpProbeDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createOnDemandHttpProbeDetails;
		this.createOnDemandHttpProbeDetails = createOnDemandHttpProbeDetails;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
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
module.exports = CreateOnDemandHttpProbeRequest;