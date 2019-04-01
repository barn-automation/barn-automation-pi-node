/**
 * A class that contains properties necessary to perform BulkAddVirtualCircuitPublicPrefixes
 * @param {string} virtualCircuitId Minimum: 1 Maximum: 255 The OCID of the virtual circuit.
 * @param {BulkAddVirtualCircuitPublicPrefixesDetails} bulkAddVirtualCircuitPublicPrefixesDetails An instance of {@link BulkAddVirtualCircuitPublicPrefixesDetails}
 * @class BulkAddVirtualCircuitPublicPrefixesRequest
 */
class BulkAddVirtualCircuitPublicPrefixesRequest {

	constructor(virtualCircuitId, bulkAddVirtualCircuitPublicPrefixesDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = bulkAddVirtualCircuitPublicPrefixesDetails;
		this.virtualCircuitId = virtualCircuitId;
		this.bulkAddVirtualCircuitPublicPrefixesDetails = bulkAddVirtualCircuitPublicPrefixesDetails;
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
module.exports = BulkAddVirtualCircuitPublicPrefixesRequest;