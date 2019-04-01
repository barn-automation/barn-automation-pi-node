/**
* Geographic information about a vantage point.
* @param {string} [geoKey] An opaque identifier for the geographic location of the vantage point.
* @param {string} [adminDivCode] The ISO 3166-2 code for this location's first-level administrative division, either a US state or Canadian province. Only included for locations in the US or Canada. For a list of codes, see {@link https://www.iso.org/obp/ui/#search|Country Codes}.
* @param {string} [cityName] Common English-language name for the city.
* @param {string} [countryCode] The ISO 3166-1 alpha-2 country code. For a list of codes, see {@link https://www.iso.org/obp/ui/#search|Country Codes}.
* @param {string} [countryName] The common English-language name for the country.
* @param {number} [latitude] Degrees north of the Equator.
* @param {number} [longitude] Degrees east of the prime meridian.
* @class Geolocation
*/
class Geolocation {
	constructor(geoKey, adminDivCode, cityName, countryCode, countryName, latitude, longitude){
		this.geoKey = geoKey;
		this.adminDivCode = adminDivCode;
		this.cityName = cityName;
		this.countryCode = countryCode;
		this.countryName = countryName;
		this.latitude = latitude;
		this.longitude = longitude;
	}
}

module.exports = Geolocation;
