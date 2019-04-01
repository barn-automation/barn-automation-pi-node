/**
* 
* @param {string} displayName Minimum: 1 Maximum: 200 The name you assign to the secret key during creation. Does not have to be unique, and it's changeable.
* @class CreateCustomerSecretKeyDetails
*/
class CreateCustomerSecretKeyDetails {
	constructor(displayName){
		this.displayName = displayName;
	}
}

module.exports = CreateCustomerSecretKeyDetails;
