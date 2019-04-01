/**
* Contains search context, such as highlighting, for found resources.
* @param {Object} [highlights] Describes what in each field matched the search criteria by showing highlighted values, but only for free text searches or for structured queries that use a MATCHING clause. The list of strings represents fragments of values that matched the query conditions. Highlighted values are wrapped with .. tags. All values are HTML-encoded (except tags).
* @class SearchContext
*/
class SearchContext {
	constructor(highlights){
		this.highlights = highlights;
	}
}

module.exports = SearchContext;
