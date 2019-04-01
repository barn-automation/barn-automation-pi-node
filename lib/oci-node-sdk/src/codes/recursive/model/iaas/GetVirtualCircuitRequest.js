/**
 * A class that contains properties necessary to perform GetVirtualCircuit
 * @param {string} virtualCircuitId Minimum: 1 Maximum: 255 The OCID of the virtual circuit.
 * @class GetVirtualCircuitRequest
 */
class GetVirtualCircuitRequest {

	constructor(virtualCircuitId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.virtualCircuitId = virtualCircuitId;
	}

	get headers(){
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
		this._pathParams['virtualCircuitId'] = this.virtualCircuitId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVirtualCircuitRequest;