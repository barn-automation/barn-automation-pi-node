/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} name The name of the object. Avoid entering confidential information. Example: test/object1.log
* @param {number} [size] Size of the object in bytes.
* @param {string} [md5] Base64-encoded MD5 hash of the object data.
* @param {string} [timeCreated] The date and time the object was created, as described in {@link https://tools.ietf.org/rfc/rfc2616|RFC 2616}, section 14.29.
* @class ObjectSummary
*/
class ObjectSummary {
	constructor(name, size, md5, timeCreated){
		this.name = name;
		this.size = size;
		this.md5 = md5;
		this.timeCreated = timeCreated;
	}
}

module.exports = ObjectSummary;
