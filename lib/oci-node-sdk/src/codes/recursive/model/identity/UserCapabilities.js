/**
* Properties indicating how the user is allowed to authenticate.
* @param {boolean} [canUseConsolePassword] Indicates if the user can log in to the console.
* @param {boolean} [canUseApiKeys] Indicates if the user can use API keys.
* @param {boolean} [canUseAuthTokens] Indicates if the user can use SWIFT passwords / auth tokens.
* @param {boolean} [canUseSmtpCredentials] Indicates if the user can use SMTP passwords.
* @param {boolean} [canUseCustomerSecretKeys] Indicates if the user can use SigV4 symmetric keys.
* @class UserCapabilities
*/
class UserCapabilities {
	constructor(canUseConsolePassword, canUseApiKeys, canUseAuthTokens, canUseSmtpCredentials, canUseCustomerSecretKeys){
		this.canUseConsolePassword = canUseConsolePassword;
		this.canUseApiKeys = canUseApiKeys;
		this.canUseAuthTokens = canUseAuthTokens;
		this.canUseSmtpCredentials = canUseSmtpCredentials;
		this.canUseCustomerSecretKeys = canUseCustomerSecretKeys;
	}
}

module.exports = UserCapabilities;
