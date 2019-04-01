/**
* The resource entity.
* @param {string} identifier The resource identifier the work request affects.
* @param {string} entityType The resource type the work request is affects.
* @param {string} actionType The way in which this resource was affected by the work tracked by the work request. Allowed values are: CREATED UPDATED DELETED RELATED IN_PROGRESS
* @param {string} [entityUri] The URI path that the user can do a GET on to access the resource metadata.
* @class WorkRequestResource
*/
class WorkRequestResource {
	constructor(identifier, entityType, actionType, entityUri){
		this.identifier = identifier;
		this.entityType = entityType;
		this.actionType = actionType;
		this.entityUri = entityUri;
	}
}

module.exports = WorkRequestResource;
