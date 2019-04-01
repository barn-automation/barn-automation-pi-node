/**
* 
* @param {Array<Subdivision>} [items] 
* @param {string} [canonicalLink] 
* @param {string} [countryId] 
* @class Subdivisions
*/
class Subdivisions {
	constructor(items, canonicalLink, countryId){
		this.items = items;
		this.canonicalLink = canonicalLink;
		this.countryId = countryId;
	}
}

module.exports = Subdivisions;
