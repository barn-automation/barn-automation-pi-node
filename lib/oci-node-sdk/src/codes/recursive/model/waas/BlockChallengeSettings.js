/**
* The challenge settings if action is set to BLOCK.
* @param {string} [blockAction] The method used to block requests that fail the challenge, if action is set to BLOCK. If unspecified, defaults to SHOW_ERROR_PAGE. Allowed values are: SET_RESPONSE_CODE SHOW_ERROR_PAGE SHOW_CAPTCHA
* @param {number} [blockResponseCode] The response status code to return when action is set to BLOCK, blockAction is set to SET_RESPONSE_CODE or SHOW_ERROR_PAGE, and the request is blocked. If unspecified, defaults to 403.
* @param {string} [blockErrorPageMessage] Minimum: 1 Maximum: 5000 The message to show on the error page when action is set to BLOCK, blockAction is set to SHOW_ERROR_PAGE, and the request is blocked. If unspecified, defaults to Access to the website is blocked.
* @param {string} [blockErrorPageDescription] Minimum: 1 Maximum: 5000 The description text to show on the error page when action is set to BLOCK, blockAction is set to SHOW_ERROR_PAGE, and the request is blocked. If unspecified, defaults to Access blocked by website owner. Please contact support.
* @param {string} [blockErrorPageCode] Minimum: 1 Maximum: 5000 The error code to show on the error page when action is set to BLOCK, blockAction is set to SHOW_ERROR_PAGE and the request is blocked. If unspecified, defaults to 403.
* @param {string} [captchaTitle] Minimum: 1 Maximum: 100 The title used when showing a CAPTCHA challenge when action is set to BLOCK, blockAction is set to SHOW_CAPTCHA, and the request is blocked. If unspecified, defaults to Are you human?
* @param {string} [captchaHeader] Minimum: 1 Maximum: 5000 The text to show in the header when showing a CAPTCHA challenge when action is set to BLOCK, blockAction is set to SHOW_CAPTCHA, and the request is blocked. If unspecified, defaults to We have detected an increased number of attempts to access this webapp. To help us keep this webapp secure, please let us know that you are not a robot by entering the text from captcha below.
* @param {string} [captchaFooter] Minimum: 1 Maximum: 5000 The text to show in the footer when showing a CAPTCHA challenge when action is set to BLOCK, blockAction is set to SHOW_CAPTCHA, and the request is blocked. If unspecified, default to Enter the letters and numbers as they are shown in image above.
* @param {string} [captchaSubmitLabel] Minimum: 1 Maximum: 100 The text to show on the label of the CAPTCHA challenge submit button when action is set to BLOCK, blockAction is set to SHOW_CAPTCHA, and the request is blocked. If unspecified, defaults to Yes, I am human.
* @class BlockChallengeSettings
*/
class BlockChallengeSettings {
	constructor(blockAction, blockResponseCode, blockErrorPageMessage, blockErrorPageDescription, blockErrorPageCode, captchaTitle, captchaHeader, captchaFooter, captchaSubmitLabel){
		this.blockAction = blockAction;
		this.blockResponseCode = blockResponseCode;
		this.blockErrorPageMessage = blockErrorPageMessage;
		this.blockErrorPageDescription = blockErrorPageDescription;
		this.blockErrorPageCode = blockErrorPageCode;
		this.captchaTitle = captchaTitle;
		this.captchaHeader = captchaHeader;
		this.captchaFooter = captchaFooter;
		this.captchaSubmitLabel = captchaSubmitLabel;
	}
}

module.exports = BlockChallengeSettings;
