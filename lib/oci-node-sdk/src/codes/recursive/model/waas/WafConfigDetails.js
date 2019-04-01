/**
* The Web Application Firewall configuration for the WAAS policy creation.
* @param {Array<AccessRule>} [accessRules] The access rules applied to the Web Application Firewall. Used for defining custom access policies with the combination of ALLOW, DETECT, and BLOCK rules, based on different criteria.
* @param {AddressRateLimiting} [addressRateLimiting] The IP address rate limiting settings used to limit the number of requests from an address.
* @param {Array<Captcha>} [captchas] A list of CAPTCHA challenge settings. These are used to challenge requests with a CAPTCHA to block bots.
* @param {DeviceFingerprintChallenge} [deviceFingerprintChallenge] The device fingerprint challenge settings. Used to detect unique devices based on the device fingerprint information collected in order to block bots.
* @param {HumanInteractionChallenge} [humanInteractionChallenge] The human interaction challenge settings. Used to look for natural human interactions such as mouse movements, time on site, and page scrolling to identify bots.
* @param {JsChallenge} [jsChallenge] The JavaScript challenge settings. Used to challenge requests with a JavaScript challenge and take the action if a browser has no JavaScript support in order to block bots.
* @param {string} [origin] The key in the map of origins referencing the origin used for the Web Application Firewall. The origin must already be included in Origins. Required when creating the WafConfig resource, but not on update.
* @param {ProtectionSettings} [protectionSettings] The settings to apply to protection rules.
* @param {Array<Whitelist>} [whitelists] A list of IP addresses that bypass the Web Application Firewall.
* @class WafConfigDetails
*/
class WafConfigDetails {
	constructor(accessRules, addressRateLimiting, captchas, deviceFingerprintChallenge, humanInteractionChallenge, jsChallenge, origin, protectionSettings, whitelists){
		this.accessRules = accessRules;
		this.addressRateLimiting = addressRateLimiting;
		this.captchas = captchas;
		this.deviceFingerprintChallenge = deviceFingerprintChallenge;
		this.humanInteractionChallenge = humanInteractionChallenge;
		this.jsChallenge = jsChallenge;
		this.origin = origin;
		this.protectionSettings = protectionSettings;
		this.whitelists = whitelists;
	}
}

module.exports = WafConfigDetails;
