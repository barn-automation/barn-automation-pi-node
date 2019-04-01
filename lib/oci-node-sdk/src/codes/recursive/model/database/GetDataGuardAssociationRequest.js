/**
 * A class that contains properties necessary to perform GetDataGuardAssociation
 * @param {string} databaseId Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} dataGuardAssociationId Minimum: 1 Maximum: 255 The Data Guard association's {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetDataGuardAssociationRequest
 */
class GetDataGuardAssociationRequest {

	constructor(databaseId, dataGuardAssociationId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.databaseId = databaseId;
		this.dataGuardAssociationId = dataGuardAssociationId;
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
		this._pathParams['databaseId'] = this.databaseId;
		this._pathParams['dataGuardAssociationId'] = this.dataGuardAssociationId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDataGuardAssociationRequest;