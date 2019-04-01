/**
 * A class that contains properties necessary to perform ListMarketLatencies
 * @param {string} [interval] The measurement aggregation interval in days, where intervals can be one day (1d), seven days (7d), 30 days (30d), or 90 days (90d). The default is seven days (7d). Allowed values are: 1d 7d 30d 90d
 * @param {Array} [vantagePointName] The OCI vantage points to measure latency from. To view a list of available vantage points, use GET /<version>/marketPerformance/vantagePoints.
 * @param {number} [providerRankLessThanOrEqualTo] Limits the results of market latency queries to items with a providerRank less than or equal to the provided value. providerRankLessThanOrEqualTo is a whole number between 1 and 50.
 * @param {Array} [fields] The objects to include in each response.
 * @param {number} [limit] The limit of how many items to return in a response.
 * @param {string} [page] An opaque string indicating how far into the paginated result the client has reached. Supplied by opc-next-page header of previous query result response.
 * @class ListMarketLatenciesRequest
 */
class ListMarketLatenciesRequest {

	constructor(interval, vantagePointName, providerRankLessThanOrEqualTo, fields, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.interval = interval;
		this.vantagePointName = vantagePointName;
		this.providerRankLessThanOrEqualTo = providerRankLessThanOrEqualTo;
		this.fields = fields;
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
		this._queryParams['interval'] = this.interval;
		this._queryParams['vantagePointName'] = this.vantagePointName;
		this._queryParams['providerRankLessThanOrEqualTo'] = this.providerRankLessThanOrEqualTo;
		this._queryParams['fields'] = this.fields;
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
module.exports = ListMarketLatenciesRequest;