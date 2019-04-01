/**
* A filter that compares object names to a set of object name prefixes to determine if a rule applies to a given object.
* @param {Array<string>} [inclusionPrefixes] An array of object name prefixes that the rule will apply to. An empty array means to include all objects.
* @class ObjectNameFilter
*/
class ObjectNameFilter {
	constructor(inclusionPrefixes){
		this.inclusionPrefixes = inclusionPrefixes;
	}
}

module.exports = ObjectNameFilter;
