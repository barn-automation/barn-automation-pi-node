/**
* 
* @param {string} drgId Minimum: 1 Maximum: 255 The OCID of the DRG.
* @param {string} vcnId Minimum: 1 Maximum: 255 The OCID of the VCN.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique. Avoid entering confidential information.
* @param {string} [routeTableId] Minimum: 1 Maximum: 255 The OCID of the route table the DRG attachment will use. If you don't specify a route table here, the DRG attachment is created without an associated route table. The Networking service does NOT automatically associate the attached VCN's default route table with the DRG attachment. For information about why you would associate a route table with a DRG attachment, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/transitrouting.htm|Advanced Scenario: Transit Routing}.
* @class CreateDrgAttachmentDetails
*/
class CreateDrgAttachmentDetails {
	constructor(drgId, vcnId, displayName, routeTableId){
		this.drgId = drgId;
		this.vcnId = vcnId;
		this.displayName = displayName;
		this.routeTableId = routeTableId;
	}
}

module.exports = CreateDrgAttachmentDetails;
