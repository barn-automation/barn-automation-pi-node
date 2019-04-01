/**
* 
* @param {string} name A user-specified name for the pre-authenticated request. Names can be helpful in managing pre-authenticated requests.
* @param {string} accessType The operation that can be performed on this resource. Allowed values are: ObjectRead ObjectWrite ObjectReadWrite AnyObjectWrite
* @param {string} timeExpires The expiration date for the pre-authenticated request as per {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}. After this date the pre-authenticated request will no longer be valid.
* @param {string} [objectName] The name of the object that is being granted access to by the pre-authenticated request. Avoid entering confidential information. The object name can be null and if so, the pre-authenticated request grants access to the entire bucket.
* @class CreatePreauthenticatedRequestDetails
*/
class CreatePreauthenticatedRequestDetails {
	constructor(name, accessType, timeExpires, objectName){
		this.name = name;
		this.accessType = accessType;
		this.timeExpires = timeExpires;
		this.objectName = objectName;
	}
}

module.exports = CreatePreauthenticatedRequestDetails;
