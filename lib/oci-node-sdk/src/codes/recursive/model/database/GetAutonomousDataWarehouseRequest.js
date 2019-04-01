/**
 * A class that contains properties necessary to perform GetAutonomousDataWarehouse
 * @param {string} autonomousDataWarehouseId Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetAutonomousDataWarehouseRequest
 */
class GetAutonomousDataWarehouseRequest {

	constructor(autonomousDataWarehouseId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autonomousDataWarehouseId = autonomousDataWarehouseId;
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
		this._pathParams['autonomousDataWarehouseId'] = this.autonomousDataWarehouseId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAutonomousDataWarehouseRequest;