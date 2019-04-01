/**
* Defines a country
* @param {string} [id] Standard two-letter country code for this country: ISO 3166-1 alpha-2.
* @param {string} [name] Country display name in specific locale
* @param {boolean} [common] Country is common
* @param {string} [language] Locale corresponding to the display name.
* @param {string} [callingCode] Standard calling code of this country: List of ITU-T Recommendation E.164 assigned country codes (http://www.itu.int/pub/T-SP-E.164D-11-2011)
* @param {string} [currencyCode] Standard currency code of this country: List of ISO-4217 currency codes (http://www.xe.com/iso4217.php)
* @param {number} [usdExchangeRate] Quantity of this country's currency unit that can be purchased with 1 USD (Oracle exchange rate)
* @param {number} [dailyUsdExchangeRate] Quantity of this country's currency unit that can be purchased with 1 USD (daily exchange rate)
* @param {Subdivisions} [subdivisions] Subdivisions of this country.
* @param {number} [modifiedOn] 
* @param {string} [canonicalLink] 
* @class Country
*/
class Country {
	constructor(id, name, common, language, callingCode, currencyCode, usdExchangeRate, dailyUsdExchangeRate, subdivisions, modifiedOn, canonicalLink){
		this.id = id;
		this.name = name;
		this.common = common;
		this.language = language;
		this.callingCode = callingCode;
		this.currencyCode = currencyCode;
		this.usdExchangeRate = usdExchangeRate;
		this.dailyUsdExchangeRate = dailyUsdExchangeRate;
		this.subdivisions = subdivisions;
		this.modifiedOn = modifiedOn;
		this.canonicalLink = canonicalLink;
	}
}

module.exports = Country;
