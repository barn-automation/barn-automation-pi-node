/**
* Totp token for MFA
* @param {string} [totpToken] The Totp token for MFA.
* @class MfaTotpToken
*/
class MfaTotpToken {
	constructor(totpToken){
		this.totpToken = totpToken;
	}
}

module.exports = MfaTotpToken;
