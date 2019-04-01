/**
 * A class that contains properties necessary to perform ListVirtualCircuitPublicPrefixes
 * @param {string} virtualCircuitId Minimum: 1 Maximum: 255 The OCID of the virtual circuit.
 * @param {string} [verificationState] A filter to only return resources that match the given verification state. The state value is case-insensitive.
 * @class ListVirtualCircuitPublicPrefixesRequest
 */
class ListVirtualCircuitPublicPrefixesRequest {

	constructor(virtualCircuitId, verificationState){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.virtualCircuitId = virtualCircuitId;
		this.verificationState = verificationState;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['verificationState'] = this.verificationState;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['virtualCircuitId'] = this.virtualCircuitId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListVirtualCircuitPublicPrefixesRequest;