/**
* Request body for operationally managing a group.
* @param {string} [type] The type of the cursor. Allowed values are: AT_TIME LATEST TRIM_HORIZON
* @param {string} [time] The time to consume from if type is AT_TIME.
* @class UpdateGroupDetails
*/
class UpdateGroupDetails {
	constructor(type, time){
		this.type = type;
		this.time = time;
	}
}

module.exports = UpdateGroupDetails;
