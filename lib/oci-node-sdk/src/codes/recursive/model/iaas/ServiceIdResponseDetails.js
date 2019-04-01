/**
* 
* @param {string} serviceId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the service.
* @param {string} serviceName Minimum: 1 Maximum: 255 The name of the service.
* @class ServiceIdResponseDetails
*/
class ServiceIdResponseDetails {
	constructor(serviceId, serviceName){
		this.serviceId = serviceId;
		this.serviceName = serviceName;
	}
}

module.exports = ServiceIdResponseDetails;
