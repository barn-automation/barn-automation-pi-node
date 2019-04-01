/**
* 
* @param {string} condition The criteria the access rule uses to determine if action should be taken on a request. URL_IS: Matches if the concatenation of request URL path and query is identical to the contents of the value field. URL_IS_NOT: Matches if the concatenation of request URL path and query is not identical to the contents of the value field. URL_STARTS_WITH: Matches if the concatenation of request URL path and query starts with the contents of the value field. URL_PART_ENDS_WITH: Matches if the concatenation of request URL path and query ends with the contents of the value field. URL_PART_CONTAINS: Matches if the concatenation of request URL path and query contains the contents of the value field. URL_REGEX: Matches if the request is described by the regular expression in the value field. IP_IS: Matches if the request originates from an IP address in the value field. IP_IS_NOT: Matches if the request does not originate from an IP address in the value field. HTTP_HEADER_CONTAINS: Matches if the request includes an HTTP header field whose name and value correspond to data specified in the value field with a separating colon. Example: host:test.example.com where host is the name of the field and test.example.com is the value of the host field. Comparison is independently applied to every header field whose name is a case insensitive match, and the value is required to be case-sensitive identical. COUNTRY_IS: Matches if the request originates from a country in the value field. Country codes are in ISO 3166-1 alpha-2 format. For a list of codes, see {@link https://www.iso.org/obp/ui/#search/code/|ISO's website}. COUNTRY_IS_NOT: Matches if the request does not originate from a country in the value field. Country codes are in ISO 3166-1 alpha-2 format. For a list of codes, see {@link https://www.iso.org/obp/ui/#search/code/|ISO's website}. USER_AGENT_IS: Matches if the requesting user agent is identical to the contents of the value field. Example: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0 USER_AGENT_IS_NOT: Matches if the requesting user agent is not identical to the contents of the value field. Example: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0 Allowed values are: URL_IS URL_IS_NOT URL_STARTS_WITH URL_PART_ENDS_WITH URL_PART_CONTAINS URL_REGEX IP_IS IP_IS_NOT HTTP_HEADER_CONTAINS COUNTRY_IS COUNTRY_IS_NOT USER_AGENT_IS USER_AGENT_IS_NOT
* @param {string} value Minimum: 1 Maximum: 5000 The criteria value.
* @class AccessRuleCriteria
*/
class AccessRuleCriteria {
	constructor(condition, value){
		this.condition = condition;
		this.value = value;
	}
}

module.exports = AccessRuleCriteria;
