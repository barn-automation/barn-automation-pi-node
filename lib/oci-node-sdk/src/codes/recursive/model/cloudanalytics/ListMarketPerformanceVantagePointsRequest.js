/**
 * A class that contains properties necessary to perform ListMarketPerformanceVantagePoints
 * @param {number} [limit] The limit of how many items to return in a response.
 * @param {string} [page] An opaque string indicating how far into the paginated result the client has reached. Supplied by opc-next-page header of previous query result response.
 * @class ListMarketPerformanceVantagePointsRequest
 */
class ListMarketPerformanceVantagePointsRequest {

	constructor(limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.limit = limit;
		this.page = page;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
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
module.exports = ListMarketPerformanceVantagePointsRequest;