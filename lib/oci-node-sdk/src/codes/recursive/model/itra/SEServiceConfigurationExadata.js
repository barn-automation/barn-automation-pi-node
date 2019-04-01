/**
* MyServices ServiceEntitlement Service Configuration Exadata object
* @param {string} [id] 
* @param {SEExadataSecurityGroups} [securityGroups] 
* @param {string} [canonicalLink] 
* @class SEServiceConfigurationExadata
*/
class SEServiceConfigurationExadata {
	constructor(id, securityGroups, canonicalLink){
		this.id = id;
		this.securityGroups = securityGroups;
		this.canonicalLink = canonicalLink;
	}
}

module.exports = SEServiceConfigurationExadata;
