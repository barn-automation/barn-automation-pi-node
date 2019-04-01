/**
* 
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the auth token during creation. Does not have to be unique, and it's changeable.
* @class CreateAuthTokenDetails
*/
class CreateAuthTokenDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = CreateAuthTokenDetails;
