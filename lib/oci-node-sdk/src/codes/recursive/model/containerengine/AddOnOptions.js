/**
* The properties that define options for supported add-ons.
* @param {boolean} [isKubernetesDashboardEnabled] Whether or not to enable the Kubernetes Dashboard add-on.
* @param {boolean} [isTillerEnabled] Whether or not to enable the Tiller add-on.
* @class AddOnOptions
*/
class AddOnOptions {
	constructor(isKubernetesDashboardEnabled, isTillerEnabled){
		this.isKubernetesDashboardEnabled = isKubernetesDashboardEnabled;
		this.isTillerEnabled = isTillerEnabled;
	}
}

module.exports = AddOnOptions;
