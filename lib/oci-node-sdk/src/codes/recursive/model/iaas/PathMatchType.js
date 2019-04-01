/**
* The type of matching to apply to incoming URIs.
* @param {string} matchType Specifies how the load balancing service compares a {@link PathRoute} object's path string against the incoming URI. EXACT_MATCH - Looks for a path string that exactly matches the incoming URI path. FORCE_LONGEST_PREFIX_MATCH - Looks for the path string with the best, longest match of the beginning portion of the incoming URI path. PREFIX_MATCH - Looks for a path string that matches the beginning portion of the incoming URI path. SUFFIX_MATCH - Looks for a path string that matches the ending portion of the incoming URI path. For a full description of how the system handles matchType in a path route set containing multiple rules, see {@link https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm|Managing Request Routing}. Allowed values are: EXACT_MATCH FORCE_LONGEST_PREFIX_MATCH PREFIX_MATCH SUFFIX_MATCH
* @class PathMatchType
*/
class PathMatchType {
	constructor(matchType){
		this.matchType = matchType;
	}
}

module.exports = PathMatchType;
