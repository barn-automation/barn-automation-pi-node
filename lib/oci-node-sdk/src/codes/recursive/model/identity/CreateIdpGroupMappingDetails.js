/**
* 
* @param {string} idpGroupName The name of the IdP group you want to map.
* @param {string} groupId The OCID of the IAM Service {@link group} you want to map to the IdP group.
* @class CreateIdpGroupMappingDetails
*/
class CreateIdpGroupMappingDetails {
	constructor(idpGroupName, groupId){
		this.idpGroupName = idpGroupName;
		this.groupId = groupId;
	}
}

module.exports = CreateIdpGroupMappingDetails;
