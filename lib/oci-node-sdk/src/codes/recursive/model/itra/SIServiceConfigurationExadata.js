/**
* MyServices ServiceInstance Service Configuration Exadata object
* @param {string} [id] 
* @param {SIExadataSecurityGroupAssignments} [securityGroupAssignments] 
* @param {SIExadataBursting} [bursting] 
* @param {string} [canonicalLink] 
* @class SIServiceConfigurationExadata
*/
class SIServiceConfigurationExadata {
	constructor(id, securityGroupAssignments, bursting, canonicalLink){
		this.id = id;
		this.securityGroupAssignments = securityGroupAssignments;
		this.bursting = bursting;
		this.canonicalLink = canonicalLink;
	}
}

module.exports = SIServiceConfigurationExadata;
