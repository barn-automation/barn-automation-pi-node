/**
* 
* @param {Array<OperationItemDefinition>} [items] List of OperationItemDefinitions.
* @param {string} [canonicalLink] link to access this OperationItemDefinition list
* @param {ResourceFilter} [resourceFilter] 
* @param {boolean} [hasMore] Set to true if subsequent GETs need to be done to list all OperationItemDefinitions
* @param {number} [limit] Maximum number of OperationItemDefinition returned
* @param {number} [offset] Starting offset of OperationItemDefinitions returned
* @param {string} [previousLink] Link to previous OperationItemDefinition page
* @param {string} [nextLink] Link to next OperationItemDefinition page
* @class OperationItemDefinitions
*/
class OperationItemDefinitions {
	constructor(items, canonicalLink, resourceFilter, hasMore, limit, offset, previousLink, nextLink){
		this.items = items;
		this.canonicalLink = canonicalLink;
		this.resourceFilter = resourceFilter;
		this.hasMore = hasMore;
		this.limit = limit;
		this.offset = offset;
		this.previousLink = previousLink;
		this.nextLink = nextLink;
	}
}

module.exports = OperationItemDefinitions;
