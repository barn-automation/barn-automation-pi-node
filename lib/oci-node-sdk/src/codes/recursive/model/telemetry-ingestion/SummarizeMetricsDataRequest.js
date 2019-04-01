/**
 * A class that contains properties necessary to perform SummarizeMetricsData
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the resources monitored by the metric that you are searching for. Use tenancyId to search in the root compartment.
 * @param {SummarizeMetricsDataDetails} summarizeMetricsDataDetails An instance of {@link SummarizeMetricsDataDetails}
 * @param {boolean} [compartmentIdInSubtree] When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false.
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class SummarizeMetricsDataRequest
 */
class SummarizeMetricsDataRequest {

	constructor(compartmentId, summarizeMetricsDataDetails, compartmentIdInSubtree, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = summarizeMetricsDataDetails;
		this.compartmentId = compartmentId;
		this.summarizeMetricsDataDetails = summarizeMetricsDataDetails;
		this.compartmentIdInSubtree = compartmentIdInSubtree;
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
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['compartmentIdInSubtree'] = this.compartmentIdInSubtree;
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
module.exports = SummarizeMetricsDataRequest;