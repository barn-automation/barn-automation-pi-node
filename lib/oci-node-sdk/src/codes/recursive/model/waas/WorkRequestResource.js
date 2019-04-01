/**
* The resource on which the work request is operating.
* @param {string} [actionType] How the work request affects the resource. Allowed values are: IN_PROGRESS CREATED UPDATED DELETED RELATED PURGED
* @param {string} [entityType] The resource type the work request affects.
* @param {string} [identifier] The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the resource that the work request affects.
* @param {string} [entityUri] The URI path used while performing a GET to access the resource metadata.
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
