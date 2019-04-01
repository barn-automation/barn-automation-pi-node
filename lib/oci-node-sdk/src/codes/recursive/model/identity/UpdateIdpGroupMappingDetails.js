/**
* 
* @param {string} [idpGroupName] The idp group name.
* @param {string} [groupId] The OCID of the group.
* @class UpdateIdpGroupMappingDetails
*/
class UpdateIdpGroupMappingDetails {
	constructor(idpGroupName, groupId){
		this.idpGroupName = idpGroupName;
		this.groupId = groupId;
	}
}

module.exports = UpdateIdpGroupMappingDetails;
