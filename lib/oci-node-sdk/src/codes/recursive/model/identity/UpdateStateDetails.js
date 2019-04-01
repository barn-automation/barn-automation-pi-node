/**
* 
* @param {boolean} [blocked] Update state to blocked or unblocked. Only "false" is supported (for changing the state to unblocked).
* @class UpdateStateDetails
*/
class UpdateStateDetails {
	constructor(blocked){
		this.blocked = blocked;
	}
}

module.exports = UpdateStateDetails;
