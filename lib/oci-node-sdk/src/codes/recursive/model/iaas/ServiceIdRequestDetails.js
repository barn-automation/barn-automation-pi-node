/**
* 
* @param {string} serviceId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the {@link Service}.
* @class ServiceIdRequestDetails
*/
class ServiceIdRequestDetails {
	constructor(serviceId){
		this.serviceId = serviceId;
	}
}

module.exports = ServiceIdRequestDetails;
