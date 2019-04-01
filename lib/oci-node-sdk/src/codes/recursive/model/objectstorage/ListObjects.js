/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {Array<ObjectSummary>} objects An array of object summaries.
* @param {Array<string>} [prefixes] Prefixes that are common to the results returned by the request if the request specified a delimiter.
* @param {string} [nextStartWith] The name of the object to use in the 'startWith' parameter to obtain the next page of a truncated ListObjects response. Avoid entering confidential information. Example: test/object1.log
* @class ListObjects
*/
class ListObjects {
	constructor(objects, prefixes, nextStartWith){
		this.objects = objects;
		this.prefixes = prefixes;
		this.nextStartWith = nextStartWith;
	}
}

module.exports = ListObjects;
