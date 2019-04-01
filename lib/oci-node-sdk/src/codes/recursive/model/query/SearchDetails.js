/**
* A base request type containing common criteria for searching for resources.
* @param {string} type The type of SearchDetails, whether FreeText or Structured. Allowed values are: Structured (See {@link StructuredSearchDetails}) FreeText (See {@link FreeTextSearchDetails})
* @param {string} [matchingContextType] The type of matching context returned in the response. If you specify HIGHLIGHTS, then the service will highlight fragments in its response. (See ResourceSummary.searchContext and SearchContext for more information.) The default setting is NONE. Allowed values are: NONE HIGHLIGHTS
* @class SearchDetails
*/
class SearchDetails {
	constructor(type, matchingContextType){
		this.type = type;
		this.matchingContextType = matchingContextType;
	}
}

module.exports = SearchDetails;
