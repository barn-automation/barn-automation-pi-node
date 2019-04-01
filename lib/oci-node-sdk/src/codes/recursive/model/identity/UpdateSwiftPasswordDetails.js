/**
* 
* @param {string} [description] The description you assign to the Swift password. Does not have to be unique, and it's changeable.
* @class UpdateSwiftPasswordDetails
*/
class UpdateSwiftPasswordDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = UpdateSwiftPasswordDetails;
