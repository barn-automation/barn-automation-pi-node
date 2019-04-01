/**
* The properties that define meta data for a cluster.
* @param {string} [timeCreated] The time the cluster was created.
* @param {string} [createdByUserId] The user who created the cluster.
* @param {string} [createdByWorkRequestId] The OCID of the work request which created the cluster.
* @param {string} [timeDeleted] The time the cluster was deleted.
* @param {string} [deletedByUserId] The user who deleted the cluster.
* @param {string} [deletedByWorkRequestId] The OCID of the work request which deleted the cluster.
* @param {string} [timeUpdated] The time the cluster was updated.
* @param {string} [updatedByUserId] The user who updated the cluster.
* @param {string} [updatedByWorkRequestId] The OCID of the work request which updated the cluster.
* @class ClusterMetadata
*/
class ClusterMetadata {
	constructor(timeCreated, createdByUserId, createdByWorkRequestId, timeDeleted, deletedByUserId, deletedByWorkRequestId, timeUpdated, updatedByUserId, updatedByWorkRequestId){
		this.timeCreated = timeCreated;
		this.createdByUserId = createdByUserId;
		this.createdByWorkRequestId = createdByWorkRequestId;
		this.timeDeleted = timeDeleted;
		this.deletedByUserId = deletedByUserId;
		this.deletedByWorkRequestId = deletedByWorkRequestId;
		this.timeUpdated = timeUpdated;
		this.updatedByUserId = updatedByUserId;
		this.updatedByWorkRequestId = updatedByWorkRequestId;
	}
}

module.exports = ClusterMetadata;
