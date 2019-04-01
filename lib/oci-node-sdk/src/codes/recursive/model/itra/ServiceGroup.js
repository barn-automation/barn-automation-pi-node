/**
* 
* @param {string} [id] service group unique identifier
* @param {string} [language] Content-Language
* @param {number} [weight] Weight of service group.
* @param {string} [displayName] Display Name
* @param {Array<ServiceGroup>} [languageLocalizations] List of ServiceGroup containing subset of attributes that are localized by language
* @param {number} [createdOn] Creation date/time
* @param {string} [createdBy] Creator (user)
* @param {number} [modifiedOn] Modification date/time
* @param {string} [modifiedBy] Modifier (user)
* @param {string} [canonicalLink] Canonical Link
* @class ServiceGroup
*/
class ServiceGroup {
	constructor(id, language, weight, displayName, languageLocalizations, createdOn, createdBy, modifiedOn, modifiedBy, canonicalLink){
		this.id = id;
		this.language = language;
		this.weight = weight;
		this.displayName = displayName;
		this.languageLocalizations = languageLocalizations;
		this.createdOn = createdOn;
		this.createdBy = createdBy;
		this.modifiedOn = modifiedOn;
		this.modifiedBy = modifiedBy;
		this.canonicalLink = canonicalLink;
	}
}

module.exports = ServiceGroup;
