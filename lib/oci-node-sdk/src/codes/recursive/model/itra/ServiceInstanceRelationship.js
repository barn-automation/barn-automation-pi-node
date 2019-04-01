/**
* Some services have a requirement to have an implicit dependent service instance to be created as a by-product of creation of the primary service instance. For instance, for FA services, a pre-production instance gets created implicitly when a production service instance is created . The following model captures such a requirement.
* @param {string} [id] 
* @param {string} [serviceName] 
* @param {string} [operationType] Allowed values are: TRA_UNKNOWN ACTIVATION ARCHIVE_SERVICE ARCHIVE_SYSTEM ASSOCIATION CANCELATION CANCEL_ACTIVATION CONVERT_SVC_INST_TO_SBE CREATE_ACCOUNT CREATE_CLOUD_ACCOUNT DELETE_ACCOUNT CONVERT_TRIAL_TO_PAID CREATE_SYSTEM DISABLE DISABLE_ALL DISASSOCIATION ENABLE ENABLE_ALL EXTENSION LOCK MIGRATION ONBOARDING GLOBAL_ONBOARDING ONBOARDING_PASSIVE ON_OVER_UTILIZATION PROVISIONING REFRESH_ENTITLEMENT RELOCATE_ENTITLEMENT RENAME_CLOUD_ACCOUNT REPROVISION PURGE_SERVICE_ARCHIVE PURGE_SYSTEM PURGE_SYSTEM_ARCHIVE SOFT_BREACH SOFT_TERMINATION SUBMIT_GSI_ORDER TERMINATE_CLOUD_ACCOUNT TERMINATE_SYSTEM TERMINATION TERMINATION_DUE_TO_CANCEL TERMINATION_PASSIVE TRIAL_EXTENSION TUNNEL_TO_DC UNLOCK UPDATE UPDATE_SYSTEM UPDATE_ACCOUNT SUSPEND RESUME
* @param {string} [systemNameSuffix] System name suffix appended to the system name
* @param {string} [serviceNameSuffix] Service name suffix appended to the service name
* @param {string} [subscriptionType] Allowed values are: TRIAL PRODUCTION ORACLE_ASSIGNED_ENVIRONMENT TRA_UNKNOWN
* @param {string} [serviceInstanceType] Allowed values are: TRA_UNKNOWN PRODUCTION TEST DEVELOPMENT DEV STAGE DR
* @param {boolean} [drEntry] 
* @param {boolean} [dependantRelationship] 
* @param {string} [serviceId] 
* @class ServiceInstanceRelationship
*/
class ServiceInstanceRelationship {
	constructor(id, serviceName, operationType, systemNameSuffix, serviceNameSuffix, subscriptionType, serviceInstanceType, drEntry, dependantRelationship, serviceId){
		this.id = id;
		this.serviceName = serviceName;
		this.operationType = operationType;
		this.systemNameSuffix = systemNameSuffix;
		this.serviceNameSuffix = serviceNameSuffix;
		this.subscriptionType = subscriptionType;
		this.serviceInstanceType = serviceInstanceType;
		this.drEntry = drEntry;
		this.dependantRelationship = dependantRelationship;
		this.serviceId = serviceId;
	}
}

module.exports = ServiceInstanceRelationship;
