/**
* Get summary information about pre-authenticated requests.
* @param {string} id The unique identifier to use when directly addressing the pre-authenticated request.
* @param {string} name The user-provided name of the pre-authenticated request.
* @param {string} accessType The operation that can be performed on this resource. Allowed values are: ObjectRead ObjectWrite ObjectReadWrite AnyObjectWrite
* @param {string} timeExpires The expiration date for the pre-authenticated request as per {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}. After this date the pre-authenticated request will no longer be valid.
* @param {string} timeCreated The date when the pre-authenticated request was created as per {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}.
* @param {string} [objectName] The name of object that is being granted access to by the pre-authenticated request. This can be null and if it is, the pre-authenticated request grants access to the entire bucket.
* @class PreauthenticatedRequestSummary
*/
class PreauthenticatedRequestSummary {
	constructor(id, name, accessType, timeExpires, timeCreated, objectName){
		this.id = id;
		this.name = name;
		this.accessType = accessType;
		this.timeExpires = timeExpires;
		this.timeCreated = timeCreated;
		this.objectName = objectName;
	}
}

module.exports = PreauthenticatedRequestSummary;
