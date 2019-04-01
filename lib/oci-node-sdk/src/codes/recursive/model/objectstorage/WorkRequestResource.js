/**
* 
* @param {string} [actionType] The status of the work request. Allowed values are: CREATED UPDATED DELETED RELATED IN_PROGRESS READ WRITTEN
* @param {string} [entityType] The resource type the work request affects.
* @param {string} [identifier] The resource type identifier.
* @param {string} [entityUri] The URI path that you can use for a GET request to access the resource metadata.
* @param {Object} [metadata] The metadata of the resource.
* @class WorkRequestResource
*/
class WorkRequestResource {
	constructor(actionType, entityType, identifier, entityUri, metadata){
		this.actionType = actionType;
		this.entityType = entityType;
		this.identifier = identifier;
		this.entityUri = entityUri;
		this.metadata = metadata;
	}
}

module.exports = WorkRequestResource;
