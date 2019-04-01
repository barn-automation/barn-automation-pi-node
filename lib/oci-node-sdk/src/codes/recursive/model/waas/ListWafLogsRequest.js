/**
 * A class that contains properties necessary to perform ListWafLogs
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 20.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {string} [timeObservedGreaterThanOrEqualTo] A filter that matches log entries where the observed event occurred on or after a date and time specified in RFC 3339 format. If unspecified, defaults to two hours before receipt of the request.
 * @param {string} [timeObservedLessThan] A filter that matches log entries where the observed event occurred before a date and time, specified in RFC 3339 format.
 * @param {string} [textContains] A full text search for logs.
 * @param {Array} [accessRuleKey] Filters logs by access rule key.
 * @param {Array} [action] Filters logs by Web Application Firewall action.
 * @param {Array} [clientAddress] Filters logs by client IP address.
 * @param {Array} [countryCode] Filters logs by country code. Country codes are in ISO 3166-1 alpha-2 format. For a list of codes, see {@link https://www.iso.org/obp/ui/#search/code/|ISO's website}.
 * @param {Array} [countryName] Filter logs by country name.
 * @param {Array} [fingerprint] Filter logs by device fingerprint.
 * @param {Array} [httpMethod] Filter logs by HTTP method.
 * @param {Array} [incidentKey] Filter logs by incident key.
 * @param {Array} [logType] Filter by log type.
 * @param {Array} [originAddress] Filter by origin IP address.
 * @param {Array} [referrer] Filter by referrer.
 * @param {Array} [requestUrl] Filter by request URL.
 * @param {Array} [responseCode] Filter by response code.
 * @param {Array} [threatFeedKey] Filter by threat feed key.
 * @param {Array} [userAgent] Filter by user agent.
 * @param {Array} [protectionRuleKey] Filter by protection rule key.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListWafLogsRequest
 */
class ListWafLogsRequest {

	constructor(waasPolicyId, limit, page, timeObservedGreaterThanOrEqualTo, timeObservedLessThan, textContains, accessRuleKey, action, clientAddress, countryCode, countryName, fingerprint, httpMethod, incidentKey, logType, originAddress, referrer, requestUrl, responseCode, threatFeedKey, userAgent, protectionRuleKey, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.waasPolicyId = waasPolicyId;
		this.limit = limit;
		this.page = page;
		this.timeObservedGreaterThanOrEqualTo = timeObservedGreaterThanOrEqualTo;
		this.timeObservedLessThan = timeObservedLessThan;
		this.textContains = textContains;
		this.accessRuleKey = accessRuleKey;
		this.action = action;
		this.clientAddress = clientAddress;
		this.countryCode = countryCode;
		this.countryName = countryName;
		this.fingerprint = fingerprint;
		this.httpMethod = httpMethod;
		this.incidentKey = incidentKey;
		this.logType = logType;
		this.originAddress = originAddress;
		this.referrer = referrer;
		this.requestUrl = requestUrl;
		this.responseCode = responseCode;
		this.threatFeedKey = threatFeedKey;
		this.userAgent = userAgent;
		this.protectionRuleKey = protectionRuleKey;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['timeObservedGreaterThanOrEqualTo'] = this.timeObservedGreaterThanOrEqualTo;
		this._queryParams['timeObservedLessThan'] = this.timeObservedLessThan;
		this._queryParams['textContains'] = this.textContains;
		this._queryParams['accessRuleKey'] = this.accessRuleKey;
		this._queryParams['action'] = this.action;
		this._queryParams['clientAddress'] = this.clientAddress;
		this._queryParams['countryCode'] = this.countryCode;
		this._queryParams['countryName'] = this.countryName;
		this._queryParams['fingerprint'] = this.fingerprint;
		this._queryParams['httpMethod'] = this.httpMethod;
		this._queryParams['incidentKey'] = this.incidentKey;
		this._queryParams['logType'] = this.logType;
		this._queryParams['originAddress'] = this.originAddress;
		this._queryParams['referrer'] = this.referrer;
		this._queryParams['requestUrl'] = this.requestUrl;
		this._queryParams['responseCode'] = this.responseCode;
		this._queryParams['threatFeedKey'] = this.threatFeedKey;
		this._queryParams['userAgent'] = this.userAgent;
		this._queryParams['protectionRuleKey'] = this.protectionRuleKey;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['waasPolicyId'] = this.waasPolicyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListWafLogsRequest;