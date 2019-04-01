/**
* 
* @param {string} [id] Standard code for this subdivision: ISO 3166-2.
* @param {string} [name] Subdivision display name in specific locale
* @param {string} [language] 
* @param {string} [canonicalLink] 
* @param {string} [countryId] 
* @class Subdivision
*/
class Subdivision {
	constructor(id, name, language, canonicalLink, countryId){
		this.id = id;
		this.name = name;
		this.language = language;
		this.canonicalLink = canonicalLink;
		this.countryId = countryId;
	}
}

module.exports = Subdivision;
