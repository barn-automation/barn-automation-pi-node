/**
* The properties that define a work request resource.
* @param {string} [actionType] The way in which this resource was affected by the work tracked by the work request. Allowed values are: CREATED UPDATED DELETED RELATED IN_PROGRESS FAILED
* @param {string} [entityType] The resource type the work request affects.
* @param {string} [identifier] The OCID of the resource the work request affects.
* @param {string} [entityUri] The URI path on which the user can issue a GET request to access the resource metadata.
* @class WorkRequestResource
*/
class WorkRequestResource {
	constructor(actionType, entityType, identifier, entityUri){
		this.actionType = actionType;
		this.entityType = entityType;
		this.identifier = identifier;
		this.entityUri = entityUri;
	}
}

module.exports = WorkRequestResource;
