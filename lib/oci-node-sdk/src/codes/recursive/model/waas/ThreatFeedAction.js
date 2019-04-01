/**
* The action to take for a request that has been determined to be potentially malicious.
* @param {string} key The unique key of the object for which the action applies.
* @param {string} action The selected action. If unspecified, defaults to OFF. Allowed values are: OFF DETECT BLOCK
* @class ThreatFeedAction
*/
class ThreatFeedAction {
	constructor(key, action){
		this.key = key;
		this.action = action;
	}
}

module.exports = ThreatFeedAction;
