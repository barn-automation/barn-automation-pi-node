/**
* A request containing search filters using the structured search query language.
* @param {string} type The type of SearchDetails, whether FreeText or Structured. Required value: Structured See {@link SearchDetails} for more information.
* @param {string} query The structured query describing which resources to search for.
* @param {string} [matchingContextType] The type of matching context returned in the response. If you specify HIGHLIGHTS, then the service will highlight fragments in its response. (See ResourceSummary.searchContext and SearchContext for more information.) The default setting is NONE. Allowed values are: NONE HIGHLIGHTS
* @class StructuredSearchDetails
*/
class StructuredSearchDetails {
	constructor(type, query, matchingContextType){
		this.type = type;
		this.query = query;
		this.matchingContextType = matchingContextType;
	}
}

module.exports = StructuredSearchDetails;
