/**
* 
* @param {string} [description] The description you assign to the auth token. Does not have to be unique, and it's changeable.
* @class UpdateAuthTokenDetails
*/
class UpdateAuthTokenDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = UpdateAuthTokenDetails;
