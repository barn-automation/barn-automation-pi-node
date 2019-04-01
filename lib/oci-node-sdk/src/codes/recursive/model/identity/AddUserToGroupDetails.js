/**
* 
* @param {string} userId The OCID of the user.
* @param {string} groupId The OCID of the group.
* @class AddUserToGroupDetails
*/
class AddUserToGroupDetails {
	constructor(userId, groupId){
		this.userId = userId;
		this.groupId = groupId;
	}
}

module.exports = AddUserToGroupDetails;
