/**
* Object used to create a group cursor.
* @param {string} type The type of the cursor. This value is only used when the group is created. Allowed values are: AT_TIME LATEST TRIM_HORIZON
* @param {string} groupName Name of the consumer group.
* @param {string} [time] The time to consume from if type is AT_TIME.
* @param {string} [instanceName] A unique identifier for the instance joining the consumer group. If an instanceName is not provided, a UUID will be generated and used.
* @param {number} [timeoutInMs] The amount of a consumer instance inactivity time, before partition reservations are released.
* @param {boolean} [commitOnGet] When using consumer-groups, the default commit-on-get behaviour can be overriden by setting this value to false. If disabled, a consumer must manually commit their cursors.
* @class CreateGroupCursorDetails
*/
class CreateGroupCursorDetails {
	constructor(type, groupName, time, instanceName, timeoutInMs, commitOnGet){
		this.type = type;
		this.groupName = groupName;
		this.time = time;
		this.instanceName = instanceName;
		this.timeoutInMs = timeoutInMs;
		this.commitOnGet = commitOnGet;
	}
}

module.exports = CreateGroupCursorDetails;
