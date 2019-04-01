/**
* 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [routeTableId] Minimum: 1 Maximum: 255 The OCID of the route table the DRG attachment will use. For information about why you would associate a route table with a DRG attachment, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/transitrouting.htm|Advanced Scenario: Transit Routing}.
* @class UpdateDrgAttachmentDetails
*/
class UpdateDrgAttachmentDetails {
	constructor(displayName, routeTableId){
		this.displayName = displayName;
		this.routeTableId = routeTableId;
	}
}

module.exports = UpdateDrgAttachmentDetails;
