const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Search Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class SearchClient
 * @extends AbstractApiClient
 */
class SearchClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://query.${this.region}.oraclecloud.com`;
	}


	/**
	* Queries any and all compartments in the tenancy to find resources that match the specified criteria. Results include resources that you have permission to view and can span different resource types. You can also sort results based on a specified resource attribute.
	* @param {SearchResourcesRequest} searchResourcesRequest An instance of SearchResourcesRequest
	* @method
	*/
	searchResources(searchResourcesRequest){
		const params = this.Utils.cleanObject( searchResourcesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180409/resources${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( searchResourcesRequest.headers )
		}, JSON.stringify(searchResourcesRequest.body));
	}


	/**
	* Gets detailed information about a resource type by using the resource type name.
	* @param {GetResourceTypeRequest} getResourceTypeRequest An instance of GetResourceTypeRequest
	* @method
	*/
	getResourceType(getResourceTypeRequest){
		const params = this.Utils.cleanObject( getResourceTypeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180409/resourceTypes/${getResourceTypeRequest.pathParams.name}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getResourceTypeRequest.headers )
		}, JSON.stringify(getResourceTypeRequest.body));
	}


	/**
	* Lists all resource types that you can search or query for.
	* @param {ListResourceTypesRequest} listResourceTypesRequest An instance of ListResourceTypesRequest
	* @method
	*/
	listResourceTypes(listResourceTypesRequest){
		const params = this.Utils.cleanObject( listResourceTypesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180409/resourceTypes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listResourceTypesRequest.headers )
		}, JSON.stringify(listResourceTypesRequest.body));
	}


}
module.exports = SearchClient;