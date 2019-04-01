/**
 * A class that contains properties necessary to perform BulkDeleteVirtualCircuitPublicPrefixes
 * @param {string} virtualCircuitId Minimum: 1 Maximum: 255 The OCID of the virtual circuit.
 * @param {BulkDeleteVirtualCircuitPublicPrefixesDetails} bulkDeleteVirtualCircuitPublicPrefixesDetails An instance of {@link BulkDeleteVirtualCircuitPublicPrefixesDetails}
 * @class BulkDeleteVirtualCircuitPublicPrefixesRequest
 */
class BulkDeleteVirtualCircuitPublicPrefixesRequest {

	constructor(virtualCircuitId, bulkDeleteVirtualCircuitPublicPrefixesDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = bulkDeleteVirtualCircuitPublicPrefixesDetails;
		this.virtualCircuitId = virtualCircuitId;
		this.bulkDeleteVirtualCircuitPublicPrefixesDetails = bulkDeleteVirtualCircuitPublicPrefixesDetails;
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
module.exports = BulkDeleteVirtualCircuitPublicPrefixesRequest;