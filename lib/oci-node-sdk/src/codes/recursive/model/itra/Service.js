/**
* 
* @param {string} [id] 
* @param {string} [parentServiceId] 
* @param {string} [type] Service short name (JAVA,APEX, etc)
* @param {string} [subscriptionModel] Allowed values are: SERVICE_INSTANCE SERVICE_ENTITLEMENT CLOUD_CREDIT METERED_SERVICE_ENTITLEMENT TRA_UNKNOWN
* @param {string} [category] Allowed values are: TRA_UNKNOWN IAAS SAAS PAAS CLOUD_CREDIT
* @param {number} [maxActiveTrials] Quota of trial for that service, also count rejected order and trial terminate still in the wait period
* @param {number} [waitPeriodBetweenTrials] Operiod between trial you need to wait before release your trial quota
* @param {number} [maxExtensionsAllowed] Number of time you can request trial extension
* @param {ServicePlans} [plans] 
* @param {Array<ServiceOption>} [serviceOptions] One optional option could be selected for CIM add instance.
* @param {Array<Service>} [allowedServiceAssociations] Which service could be associate with this service
* @param {Array<CustomAttribute>} [customAttributes] Custom property related to this service
* @param {Array<CustomAttributeSection>} [customAttributeSections] Custom section related to this service
* @param {TrialValidationRule} [trialValidationRule] Rule of validation like SMS/EMAIL/CREDIT CARD
* @param {boolean} [archiveEnabled] Can do archive (Supported only for PAID, default 30 days)
* @param {boolean} [softArchivalEnabled] Can do soft archival (Deprecated: default archive 30 days for TRIAL and 60 days for PAID)
* @param {number} [trialPeriod] Trial duration in minutes
* @param {number} [extensionPeriod] Trial extention duration in minutes
* @param {string} [displayName] Display name - [Localizable]
* @param {Array<ServiceInstanceRelationship>} [serviceInstanceRelationships] Returns this service instance relationships, some services have a requirement to have an implicit dependent service instance to be created as a by-product of creation of the primary service instance. For instance, for FA services, a pre-production instance gets created implicitly when a production service instance is created.
* @param {string} [url] Service url pointing to the get start of the service.
* @param {Array<Service>} [entitlementServices] Deprecated. Use trialEntitlementServices and/or productionEntitlementServices instead, if needed.
* @param {Array<Service>} [trialEntitlementServices] For entitlement type CLOUD_CREDIT, the list of trial services that make up the entitlement.
* @param {Array<Service>} [productionEntitlementServices] For entitlement type CLOUD_CREDIT, the list of services that make up the entitlement.
* @param {boolean} [isFaService] 
* @param {string} [serDisplayNameTKey] 
* @param {string} [serDescriptionTKey] 
* @param {string} [language] 
* @param {string} [bundleName] 
* @param {boolean} [isMandatoryAssociation] Indicates if the association is mandatory (true) or not (false).
* @param {string} [canonicalLink] 
* @param {boolean} [routingTierEnabled] IP white listing enabled
* @param {boolean} [commonInstanceManagerEnabled] CIM enabled
* @param {Array<OperationType>} [unsupportedOperations] Returns list of unsupported operations
* @param {Array<ServiceProperty>} [serviceProperties] Returns list of service properties
* @param {number} [weight] 
* @param {ServiceGroup} [group] 
* @param {Array<Service>} [dependentServices] This is to show dependency between service like DBAAS -> Compute -> Storage
* @param {string} [subscriptionType] Allowed values are: TRIAL PRODUCTION ORACLE_ASSIGNED_ENVIRONMENT TRA_UNKNOWN
* @param {string} [cloudAccountSupport] Allowed values are: DISABLED ENABLED TRA_UNKNOWN
* @param {Array<AttributeValue>} [customAttributeValues] Custom Attribute Values (key:value)
* @param {Array<SubscriptionModelConfiguration>} [subscriptionModelConfigurations] Subscription model configuration
* @param {string} [subCategory] Sub category - [Localizable]
* @param {string} [subCategoryTKey] 
* @param {string} [shortDisplayName] Short Display Name - [Localizable]
* @param {string} [shortDisplayNameTKey] 
* @param {string} [internalDisplayName] 
* @param {string} [internalShortDisplayName] 
* @param {string} [customDisplayName] 
* @param {string} [customShortDisplayName] 
* @param {Array<Service>} [languageLocalizations] 
* @class Service
*/
class Service {
	constructor(id, parentServiceId, type, subscriptionModel, category, maxActiveTrials, waitPeriodBetweenTrials, maxExtensionsAllowed, plans, serviceOptions, allowedServiceAssociations, customAttributes, customAttributeSections, trialValidationRule, archiveEnabled, softArchivalEnabled, trialPeriod, extensionPeriod, displayName, serviceInstanceRelationships, url, entitlementServices, trialEntitlementServices, productionEntitlementServices, isFaService, serDisplayNameTKey, serDescriptionTKey, language, bundleName, isMandatoryAssociation, canonicalLink, routingTierEnabled, commonInstanceManagerEnabled, unsupportedOperations, serviceProperties, weight, group, dependentServices, subscriptionType, cloudAccountSupport, customAttributeValues, subscriptionModelConfigurations, subCategory, subCategoryTKey, shortDisplayName, shortDisplayNameTKey, internalDisplayName, internalShortDisplayName, customDisplayName, customShortDisplayName, languageLocalizations){
		this.id = id;
		this.parentServiceId = parentServiceId;
		this.type = type;
		this.subscriptionModel = subscriptionModel;
		this.category = category;
		this.maxActiveTrials = maxActiveTrials;
		this.waitPeriodBetweenTrials = waitPeriodBetweenTrials;
		this.maxExtensionsAllowed = maxExtensionsAllowed;
		this.plans = plans;
		this.serviceOptions = serviceOptions;
		this.allowedServiceAssociations = allowedServiceAssociations;
		this.customAttributes = customAttributes;
		this.customAttributeSections = customAttributeSections;
		this.trialValidationRule = trialValidationRule;
		this.archiveEnabled = archiveEnabled;
		this.softArchivalEnabled = softArchivalEnabled;
		this.trialPeriod = trialPeriod;
		this.extensionPeriod = extensionPeriod;
		this.displayName = displayName;
		this.serviceInstanceRelationships = serviceInstanceRelationships;
		this.url = url;
		this.entitlementServices = entitlementServices;
		this.trialEntitlementServices = trialEntitlementServices;
		this.productionEntitlementServices = productionEntitlementServices;
		this.isFaService = isFaService;
		this.serDisplayNameTKey = serDisplayNameTKey;
		this.serDescriptionTKey = serDescriptionTKey;
		this.language = language;
		this.bundleName = bundleName;
		this.isMandatoryAssociation = isMandatoryAssociation;
		this.canonicalLink = canonicalLink;
		this.routingTierEnabled = routingTierEnabled;
		this.commonInstanceManagerEnabled = commonInstanceManagerEnabled;
		this.unsupportedOperations = unsupportedOperations;
		this.serviceProperties = serviceProperties;
		this.weight = weight;
		this.group = group;
		this.dependentServices = dependentServices;
		this.subscriptionType = subscriptionType;
		this.cloudAccountSupport = cloudAccountSupport;
		this.customAttributeValues = customAttributeValues;
		this.subscriptionModelConfigurations = subscriptionModelConfigurations;
		this.subCategory = subCategory;
		this.subCategoryTKey = subCategoryTKey;
		this.shortDisplayName = shortDisplayName;
		this.shortDisplayNameTKey = shortDisplayNameTKey;
		this.internalDisplayName = internalDisplayName;
		this.internalShortDisplayName = internalShortDisplayName;
		this.customDisplayName = customDisplayName;
		this.customShortDisplayName = customShortDisplayName;
		this.languageLocalizations = languageLocalizations;
	}
}

module.exports = Service;
