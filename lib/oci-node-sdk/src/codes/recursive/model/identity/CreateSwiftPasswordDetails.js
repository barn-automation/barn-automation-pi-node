/**
* 
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the Swift password during creation. Does not have to be unique, and it's changeable.
* @class CreateSwiftPasswordDetails
*/
class CreateSwiftPasswordDetails {
	constructor(description){
		this.description = description;
	}
}

module.exports = CreateSwiftPasswordDetails;
