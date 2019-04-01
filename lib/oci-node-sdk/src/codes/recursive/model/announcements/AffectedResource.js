/**
* The resource affected by the event described in the announcement.
* @param {string} resourceId Minimum: 1 Maximum: 255 The OCID of the affected resource.
* @param {string} resourceName The friendly name of the resource.
* @param {string} region The region where the affected resource exists.
* @class AffectedResource
*/
class AffectedResource {
	constructor(resourceId, resourceName, region){
		this.resourceId = resourceId;
		this.resourceName = resourceName;
		this.region = region;
	}
}

module.exports = AffectedResource;
