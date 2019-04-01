/**
* 
* @param {string} [displayName] The description you assign to the secret key. Does not have to be unique, and it's changeable.
* @class UpdateCustomerSecretKeyDetails
*/
class UpdateCustomerSecretKeyDetails {
	constructor(displayName){
		this.displayName = displayName;
	}
}

module.exports = UpdateCustomerSecretKeyDetails;
