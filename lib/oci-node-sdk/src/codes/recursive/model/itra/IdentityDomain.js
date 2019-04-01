/**
* MyServices IdentityDomain object
* @param {string} [id] Identity Domain Unique Id
* @param {string} [name] Identity Domain Name
* @param {string} [displayName] Identity Domain Display Name
* @class IdentityDomain
*/
class IdentityDomain {
	constructor(id, name, displayName){
		this.id = id;
		this.name = name;
		this.displayName = displayName;
	}
}

module.exports = IdentityDomain;
