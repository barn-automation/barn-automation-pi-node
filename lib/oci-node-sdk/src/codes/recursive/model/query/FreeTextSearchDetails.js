/**
* A request containing arbitrary text that must be present in the resource.
* @param {string} type The type of SearchDetails, whether FreeText or Structured. Required value: FreeText See {@link SearchDetails} for more information.
* @param {string} text The text to search for.
* @param {string} [matchingContextType] The type of matching context returned in the response. If you specify HIGHLIGHTS, then the service will highlight fragments in its response. (See ResourceSummary.searchContext and SearchContext for more information.) The default setting is NONE. Allowed values are: NONE HIGHLIGHTS
* @class FreeTextSearchDetails
*/
class FreeTextSearchDetails {
	constructor(type, text, matchingContextType){
		this.type = type;
		this.text = text;
		this.matchingContextType = matchingContextType;
	}
}

module.exports = FreeTextSearchDetails;
