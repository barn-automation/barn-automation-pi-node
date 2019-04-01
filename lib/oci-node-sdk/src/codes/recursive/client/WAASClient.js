const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Web Application Acceleration and Security Services API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class WAASClient
 * @extends AbstractApiClient
 */
class WAASClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://waas.${this.region}.oraclecloud.com`;
	}


	/**
	* Gets the currently configured access rules for the Web Application Firewall configration of a specified WAAS policy. The order of the access rules is important. The rules will be checked in the order they are specified and the first matching rule will be used.
	* @param {ListAccessRulesRequest} listAccessRulesRequest An instance of ListAccessRulesRequest
	* @method
	*/
	listAccessRules(listAccessRulesRequest){
		const params = this.Utils.cleanObject( listAccessRulesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listAccessRulesRequest.pathParams.waasPolicyId}/wafConfig/accessRules${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAccessRulesRequest.headers )
		}, JSON.stringify(listAccessRulesRequest.body));
	}


	/**
	* Updates the list of access rules in the Web Application Firewall configuration for a specified WAAS policy. Access rules allow explicit actions to be defined and executed for requests that meet various conditions. A rule action can be set to allow, detect, or block requests. The detect setting allows the request to pass through the Web Application Firewall and is tagged with a DETECT flag in the Web Application Firewall's log. This operation can create, delete, update, and/or reorder access rules depending on the structure of the request body. Updating an existing access rule can be accomplished by changing the properties of the access rule object with a non-empty key property in the list. Reordering of access rules can be accomplished by changing the order of the access rules in the list when updating. Creating an access rule can be accomplished by adding a new access rule object to the list without a key property. A key will be generated for the new access rule upon update. Deleting an access rule can be accomplished by removing the existing access rule object from the list. Any existing access rule with a key that is not present in the list of access rules sent in the request will be deleted.
	* @param {UpdateAccessRulesRequest} updateAccessRulesRequest An instance of UpdateAccessRulesRequest
	* @method
	*/
	updateAccessRules(updateAccessRulesRequest){
		const params = this.Utils.cleanObject( updateAccessRulesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateAccessRulesRequest.pathParams.waasPolicyId}/wafConfig/accessRules${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAccessRulesRequest.headers )
		}, JSON.stringify(updateAccessRulesRequest.body));
	}


	/**
	* Gets the address rate limiting settings of the Web Application Firewall configuration for a WAAS policy.
	* @param {GetWafAddressRateLimitingRequest} getWafAddressRateLimitingRequest An instance of GetWafAddressRateLimitingRequest
	* @method
	*/
	getWafAddressRateLimiting(getWafAddressRateLimitingRequest){
		const params = this.Utils.cleanObject( getWafAddressRateLimitingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getWafAddressRateLimitingRequest.pathParams.waasPolicyId}/wafConfig/addressRateLimiting${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWafAddressRateLimitingRequest.headers )
		}, JSON.stringify(getWafAddressRateLimitingRequest.body));
	}


	/**
	* Updates the address rate limiting settings in the Web Application Firewall configuration for a policy. Rate limiting allows you to configure a threshold for the number of requests from a unique IP address for the given period. You can also define the response code for the requests from the same address that exceed the threshold.
	* @param {UpdateWafAddressRateLimitingRequest} updateWafAddressRateLimitingRequest An instance of UpdateWafAddressRateLimitingRequest
	* @method
	*/
	updateWafAddressRateLimiting(updateWafAddressRateLimitingRequest){
		const params = this.Utils.cleanObject( updateWafAddressRateLimitingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateWafAddressRateLimitingRequest.pathParams.waasPolicyId}/wafConfig/addressRateLimiting${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateWafAddressRateLimitingRequest.headers )
		}, JSON.stringify(updateWafAddressRateLimitingRequest.body));
	}


	/**
	* Gets the list of currently configured CAPTCHA challenges in the Web Application Firewall configuration of a WAAS policy.
	* @param {ListCaptchasRequest} listCaptchasRequest An instance of ListCaptchasRequest
	* @method
	*/
	listCaptchas(listCaptchasRequest){
		const params = this.Utils.cleanObject( listCaptchasRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listCaptchasRequest.pathParams.waasPolicyId}/wafConfig/captchas${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCaptchasRequest.headers )
		}, JSON.stringify(listCaptchasRequest.body));
	}


	/**
	* Updates the list of CAPTCHA challenges in the Web Application Firewall configuration for a WAAS policy. This operation can create, update, or delete CAPTCHAs depending on the structure of the request body. Updating an existing CAPTCHA can be accomplished by changing the properties of the CAPTCHA object with a non-empty key property in the list. Creating a CAPTCHA can be accomplished by adding a new CAPTCHA object to the list without a key property. A key will be generated for the new CAPTCHA upon update. Deleting a CAPTCHA can be accomplished by removing the existing CAPTCHA object from the list. Any existing CAPTCHA with a key that is not present in the list of CAPTCHAs sent in the request will be deleted.
	* @param {UpdateCaptchasRequest} updateCaptchasRequest An instance of UpdateCaptchasRequest
	* @method
	*/
	updateCaptchas(updateCaptchasRequest){
		const params = this.Utils.cleanObject( updateCaptchasRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateCaptchasRequest.pathParams.waasPolicyId}/wafConfig/captchas${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCaptchasRequest.headers )
		}, JSON.stringify(updateCaptchasRequest.body));
	}


	/**
	* Allows an SSL certificate to be added to a WAAS policy. The Web Application Firewall terminates SSL connections to inspect requests in runtime, and then re-encrypts requests before sending them to the origin for fulfillment.
	* @param {CreateCertificateRequest} createCertificateRequest An instance of CreateCertificateRequest
	* @method
	*/
	createCertificate(createCertificateRequest){
		const params = this.Utils.cleanObject( createCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/certificates${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCertificateRequest.headers )
		}, JSON.stringify(createCertificateRequest.body));
	}


	/**
	* Deletes an SSL certificate from the WAAS service.
	* @param {DeleteCertificateRequest} deleteCertificateRequest An instance of DeleteCertificateRequest
	* @method
	*/
	deleteCertificate(deleteCertificateRequest){
		const params = this.Utils.cleanObject( deleteCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/certificates/${deleteCertificateRequest.pathParams.certificateId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCertificateRequest.headers )
		}, JSON.stringify(deleteCertificateRequest.body));
	}


	/**
	* Gets the details of an SSL certificate.
	* @param {GetCertificateRequest} getCertificateRequest An instance of GetCertificateRequest
	* @method
	*/
	getCertificate(getCertificateRequest){
		const params = this.Utils.cleanObject( getCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/certificates/${getCertificateRequest.pathParams.certificateId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCertificateRequest.headers )
		}, JSON.stringify(getCertificateRequest.body));
	}


	/**
	* It is not possible to update a certificate, only create and delete. Therefore, this operation can only update the display name, freeform tags, and defined tags of a certificate.
	* @param {UpdateCertificateRequest} updateCertificateRequest An instance of UpdateCertificateRequest
	* @method
	*/
	updateCertificate(updateCertificateRequest){
		const params = this.Utils.cleanObject( updateCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/certificates/${updateCertificateRequest.pathParams.certificateId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCertificateRequest.headers )
		}, JSON.stringify(updateCertificateRequest.body));
	}


	/**
	* Gets a list of SSL certificates that can be used in a WAAS policy.
	* @param {ListCertificatesRequest} listCertificatesRequest An instance of ListCertificatesRequest
	* @method
	*/
	listCertificates(listCertificatesRequest){
		const params = this.Utils.cleanObject( listCertificatesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/certificates${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCertificatesRequest.headers )
		}, JSON.stringify(listCertificatesRequest.body));
	}


	/**
	* Gets the device fingerprint challenge settings in the Web Application Firewall configuration for a WAAS policy.
	* @param {GetDeviceFingerprintChallengeRequest} getDeviceFingerprintChallengeRequest An instance of GetDeviceFingerprintChallengeRequest
	* @method
	*/
	getDeviceFingerprintChallenge(getDeviceFingerprintChallengeRequest){
		const params = this.Utils.cleanObject( getDeviceFingerprintChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getDeviceFingerprintChallengeRequest.pathParams.waasPolicyId}/wafConfig/deviceFingerprintChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDeviceFingerprintChallengeRequest.headers )
		}, JSON.stringify(getDeviceFingerprintChallengeRequest.body));
	}


	/**
	* Updates the Device Fingerprint Challenge (DFC) settings in the Web Application Firewall configuration for a policy. The DFC generates a hashed signature of both virtual and real browsers based on 50+ attributes. These proprietary signatures are then leveraged for real-time correlation to identify and block malicious bots.
	* @param {UpdateDeviceFingerprintChallengeRequest} updateDeviceFingerprintChallengeRequest An instance of UpdateDeviceFingerprintChallengeRequest
	* @method
	*/
	updateDeviceFingerprintChallenge(updateDeviceFingerprintChallengeRequest){
		const params = this.Utils.cleanObject( updateDeviceFingerprintChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateDeviceFingerprintChallengeRequest.pathParams.waasPolicyId}/wafConfig/deviceFingerprintChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDeviceFingerprintChallengeRequest.headers )
		}, JSON.stringify(updateDeviceFingerprintChallengeRequest.body));
	}


	/**
	* Return the list of the tenant's edge node subnets. Use these CIDR blocks to restrict incoming traffic to your origin. These subnets are owned by OCI and forward traffic to customer origins. They are not associated with specific regions or compartments.
	* @param {ListEdgeSubnetsRequest} listEdgeSubnetsRequest An instance of ListEdgeSubnetsRequest
	* @method
	*/
	listEdgeSubnets(listEdgeSubnetsRequest){
		const params = this.Utils.cleanObject( listEdgeSubnetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/edgeSubnets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listEdgeSubnetsRequest.headers )
		}, JSON.stringify(listEdgeSubnetsRequest.body));
	}


	/**
	* Gets the list of good bots defined in the Web Application Firewall configuration for a WAAS policy.
	* @param {ListGoodBotsRequest} listGoodBotsRequest An instance of ListGoodBotsRequest
	* @method
	*/
	listGoodBots(listGoodBotsRequest){
		const params = this.Utils.cleanObject( listGoodBotsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listGoodBotsRequest.pathParams.waasPolicyId}/wafConfig/goodBots${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listGoodBotsRequest.headers )
		}, JSON.stringify(listGoodBotsRequest.body));
	}


	/**
	* Updates the list of good bots in the Web Application Firewall configuration for a policy. Only the fields specified in the request body will be updated, all other configuration properties will remain unchanged.
	* @param {UpdateGoodBotsRequest} updateGoodBotsRequest An instance of UpdateGoodBotsRequest
	* @method
	*/
	updateGoodBots(updateGoodBotsRequest){
		const params = this.Utils.cleanObject( updateGoodBotsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateGoodBotsRequest.pathParams.waasPolicyId}/wafConfig/goodBots${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateGoodBotsRequest.headers )
		}, JSON.stringify(updateGoodBotsRequest.body));
	}


	/**
	* Gets the human interaction challenge settings in the Web Application Firewall configuration for a WAAS policy.
	* @param {GetHumanInteractionChallengeRequest} getHumanInteractionChallengeRequest An instance of GetHumanInteractionChallengeRequest
	* @method
	*/
	getHumanInteractionChallenge(getHumanInteractionChallengeRequest){
		const params = this.Utils.cleanObject( getHumanInteractionChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getHumanInteractionChallengeRequest.pathParams.waasPolicyId}/wafConfig/humanInteractionChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getHumanInteractionChallengeRequest.headers )
		}, JSON.stringify(getHumanInteractionChallengeRequest.body));
	}


	/**
	* Updates the Human Interaction Challenge (HIC) settings in the Web Application Firewall configuration for a WAAS policy. HIC is a countermeasure that allows the proxy to check the user's browser for various behaviors that distinguish a human presence from a bot.
	* @param {UpdateHumanInteractionChallengeRequest} updateHumanInteractionChallengeRequest An instance of UpdateHumanInteractionChallengeRequest
	* @method
	*/
	updateHumanInteractionChallenge(updateHumanInteractionChallengeRequest){
		const params = this.Utils.cleanObject( updateHumanInteractionChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateHumanInteractionChallengeRequest.pathParams.waasPolicyId}/wafConfig/humanInteractionChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateHumanInteractionChallengeRequest.headers )
		}, JSON.stringify(updateHumanInteractionChallengeRequest.body));
	}


	/**
	* Gets the JavaScript challenge settings in the Web Application Firewall configuration for a WAAS policy.
	* @param {GetJsChallengeRequest} getJsChallengeRequest An instance of GetJsChallengeRequest
	* @method
	*/
	getJsChallenge(getJsChallengeRequest){
		const params = this.Utils.cleanObject( getJsChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getJsChallengeRequest.pathParams.waasPolicyId}/wafConfig/jsChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJsChallengeRequest.headers )
		}, JSON.stringify(getJsChallengeRequest.body));
	}


	/**
	* Updates the JavaScript challenge settings in the Web Application Firewall configuration for a WAAS policy. JavaScript Challenge validates that the client can accept JavaScript with a binary decision. For more information, see Bot Management.
	* @param {UpdateJsChallengeRequest} updateJsChallengeRequest An instance of UpdateJsChallengeRequest
	* @method
	*/
	updateJsChallenge(updateJsChallengeRequest){
		const params = this.Utils.cleanObject( updateJsChallengeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateJsChallengeRequest.pathParams.waasPolicyId}/wafConfig/jsChallenge${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateJsChallengeRequest.headers )
		}, JSON.stringify(updateJsChallengeRequest.body));
	}


	/**
	* Gets the configuration of a WAAS policy.
	* @param {GetPolicyConfigRequest} getPolicyConfigRequest An instance of GetPolicyConfigRequest
	* @method
	*/
	getPolicyConfig(getPolicyConfigRequest){
		const params = this.Utils.cleanObject( getPolicyConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getPolicyConfigRequest.pathParams.waasPolicyId}/policyConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPolicyConfigRequest.headers )
		}, JSON.stringify(getPolicyConfigRequest.body));
	}


	/**
	* Updates the configuration for a WAAS policy. Only the fields specified in the request body will be updated; all other properties will remain unchanged.
	* @param {UpdatePolicyConfigRequest} updatePolicyConfigRequest An instance of UpdatePolicyConfigRequest
	* @method
	*/
	updatePolicyConfig(updatePolicyConfigRequest){
		const params = this.Utils.cleanObject( updatePolicyConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updatePolicyConfigRequest.pathParams.waasPolicyId}/policyConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePolicyConfigRequest.headers )
		}, JSON.stringify(updatePolicyConfigRequest.body));
	}


	/**
	* Gets the details of a protection rule in the Web Application Firewall configuration for a WAAS policy.
	* @param {GetProtectionRuleRequest} getProtectionRuleRequest An instance of GetProtectionRuleRequest
	* @method
	*/
	getProtectionRule(getProtectionRuleRequest){
		const params = this.Utils.cleanObject( getProtectionRuleRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getProtectionRuleRequest.pathParams.waasPolicyId}/wafConfig/protectionRules/${getProtectionRuleRequest.pathParams.protectionRuleKey}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getProtectionRuleRequest.headers )
		}, JSON.stringify(getProtectionRuleRequest.body));
	}


	/**
	* Gets the list of protection rules in the Web Application Firewall configuration for a WAAS policy, including currently defined rules and recommended rules. The list is sorted ascending by key.
	* @param {ListProtectionRulesRequest} listProtectionRulesRequest An instance of ListProtectionRulesRequest
	* @method
	*/
	listProtectionRules(listProtectionRulesRequest){
		const params = this.Utils.cleanObject( listProtectionRulesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listProtectionRulesRequest.pathParams.waasPolicyId}/wafConfig/protectionRules${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listProtectionRulesRequest.headers )
		}, JSON.stringify(listProtectionRulesRequest.body));
	}


	/**
	* Updates the action for each specified protection rule. Requests can either be allowed, blocked, or trigger an alert if they meet the parameters of an applied rule. For more information on protection rules, see WAF Protection Rules. This operation can update or disable protection rules depending on the structure of the request body. Updating an existing protection rule can be accomplished by changing the properties of the protection rule object with a non-empty key property in the list.
	* @param {UpdateProtectionRulesRequest} updateProtectionRulesRequest An instance of UpdateProtectionRulesRequest
	* @method
	*/
	updateProtectionRules(updateProtectionRulesRequest){
		const params = this.Utils.cleanObject( updateProtectionRulesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateProtectionRulesRequest.pathParams.waasPolicyId}/wafConfig/protectionRules${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateProtectionRulesRequest.headers )
		}, JSON.stringify(updateProtectionRulesRequest.body));
	}


	/**
	* Gets the protection settings in the Web Application Firewall configuration for a WAAS policy.
	* @param {GetProtectionSettingsRequest} getProtectionSettingsRequest An instance of GetProtectionSettingsRequest
	* @method
	*/
	getProtectionSettings(getProtectionSettingsRequest){
		const params = this.Utils.cleanObject( getProtectionSettingsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getProtectionSettingsRequest.pathParams.waasPolicyId}/wafConfig/protectionSettings${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getProtectionSettingsRequest.headers )
		}, JSON.stringify(getProtectionSettingsRequest.body));
	}


	/**
	* Updates the protection settings in the Web Application Firewall configuration for a WAAS policy. Protection settings allow you define what action is taken when a request is blocked by the Web Application Firewall, such as returning a response code or block page. Only the fields specified in the request body will be updated; all other fields will remain unchanged.
	* @param {UpdateProtectionSettingsRequest} updateProtectionSettingsRequest An instance of UpdateProtectionSettingsRequest
	* @method
	*/
	updateProtectionSettings(updateProtectionSettingsRequest){
		const params = this.Utils.cleanObject( updateProtectionSettingsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateProtectionSettingsRequest.pathParams.waasPolicyId}/wafConfig/protectionSettings${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateProtectionSettingsRequest.headers )
		}, JSON.stringify(updateProtectionSettingsRequest.body));
	}


	/**
	* Accepts a list of recommended Web Application Firewall protection rules. Web Application Firewall protection rule recommendations are sets of rules generated by observed traffic patterns through the Web Application Firewall and are meant to optimize the Web Application Firewall's security profile. Only the rules specified in the request body will be updated; all other rules will remain unchanged.
	* @param {AcceptRecommendationsRequest} acceptRecommendationsRequest An instance of AcceptRecommendationsRequest
	* @method
	*/
	acceptRecommendations(acceptRecommendationsRequest){
		const params = this.Utils.cleanObject( acceptRecommendationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${acceptRecommendationsRequest.pathParams.waasPolicyId}/actions/acceptWafConfigRecommendations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( acceptRecommendationsRequest.headers )
		}, JSON.stringify(acceptRecommendationsRequest.body));
	}


	/**
	* Gets the list of recommended Web Application Firewall protection rules.
	* @param {ListRecommendationsRequest} listRecommendationsRequest An instance of ListRecommendationsRequest
	* @method
	*/
	listRecommendations(listRecommendationsRequest){
		const params = this.Utils.cleanObject( listRecommendationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listRecommendationsRequest.pathParams.waasPolicyId}/wafConfig/recommendations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listRecommendationsRequest.headers )
		}, JSON.stringify(listRecommendationsRequest.body));
	}


	/**
	* Gets the list of available web application threat intelligence feeds and the actions set for each feed. The list is sorted ascending by key.
	* @param {ListThreatFeedsRequest} listThreatFeedsRequest An instance of ListThreatFeedsRequest
	* @method
	*/
	listThreatFeeds(listThreatFeedsRequest){
		const params = this.Utils.cleanObject( listThreatFeedsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listThreatFeedsRequest.pathParams.waasPolicyId}/wafConfig/threatFeeds${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listThreatFeedsRequest.headers )
		}, JSON.stringify(listThreatFeedsRequest.body));
	}


	/**
	* Updates the action to take when a request's IP address matches an address in the specified threat intelligence feed. Threat intelligence feeds are compiled lists of IP addresses with malicious reputations based on internet intelligence. Only the threat feeds specified in the request body will be updated; all other threat feeds will remain unchanged.
	* @param {UpdateThreatFeedsRequest} updateThreatFeedsRequest An instance of UpdateThreatFeedsRequest
	* @method
	*/
	updateThreatFeeds(updateThreatFeedsRequest){
		const params = this.Utils.cleanObject( updateThreatFeedsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateThreatFeedsRequest.pathParams.waasPolicyId}/wafConfig/threatFeeds${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateThreatFeedsRequest.headers )
		}, JSON.stringify(updateThreatFeedsRequest.body));
	}


	/**
	* Creates a new Web Application Acceleration and Security (WAAS) policy in the specified compartment. A WAAS policy must be established before creating Web Application Firewall (WAF) rules. To use WAF rules, your web application's origin servers must defined in the WaasPolicy schema.
	* @param {CreateWaasPolicyRequest} createWaasPolicyRequest An instance of CreateWaasPolicyRequest
	* @method
	*/
	createWaasPolicy(createWaasPolicyRequest){
		const params = this.Utils.cleanObject( createWaasPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createWaasPolicyRequest.headers )
		}, JSON.stringify(createWaasPolicyRequest.body));
	}


	/**
	* Deletes a policy.
	* @param {DeleteWaasPolicyRequest} deleteWaasPolicyRequest An instance of DeleteWaasPolicyRequest
	* @method
	*/
	deleteWaasPolicy(deleteWaasPolicyRequest){
		const params = this.Utils.cleanObject( deleteWaasPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${deleteWaasPolicyRequest.pathParams.waasPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteWaasPolicyRequest.headers )
		}, JSON.stringify(deleteWaasPolicyRequest.body));
	}


	/**
	* Gets the details of a WAAS policy.
	* @param {GetWaasPolicyRequest} getWaasPolicyRequest An instance of GetWaasPolicyRequest
	* @method
	*/
	getWaasPolicy(getWaasPolicyRequest){
		const params = this.Utils.cleanObject( getWaasPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getWaasPolicyRequest.pathParams.waasPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWaasPolicyRequest.headers )
		}, JSON.stringify(getWaasPolicyRequest.body));
	}


	/**
	* Updates the details of a WAAS policy, including origins and tags. Only the fields specified in the request body will be updated; all other properties will remain unchanged. To update platform provided resources such as GoodBots, ProtectionRules, and ThreatFeeds first retrieve the list of available resources with the related list operation such as GetThreatFeeds or GetProtectionRules. The returned list will contain objects with key properties that can be used to update the resource during the UpdateWaasPolicy request.
	* @param {UpdateWaasPolicyRequest} updateWaasPolicyRequest An instance of UpdateWaasPolicyRequest
	* @method
	*/
	updateWaasPolicy(updateWaasPolicyRequest){
		const params = this.Utils.cleanObject( updateWaasPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateWaasPolicyRequest.pathParams.waasPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateWaasPolicyRequest.headers )
		}, JSON.stringify(updateWaasPolicyRequest.body));
	}


	/**
	* Gets a list of WAAS policies.
	* @param {ListWaasPoliciesRequest} listWaasPoliciesRequest An instance of ListWaasPoliciesRequest
	* @method
	*/
	listWaasPolicies(listWaasPoliciesRequest){
		const params = this.Utils.cleanObject( listWaasPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWaasPoliciesRequest.headers )
		}, JSON.stringify(listWaasPoliciesRequest.body));
	}


	/**
	* Gets the number of blocked requests by a Web Application Firewall feature in five minute blocks, in ascending order by timeObserved.
	* @param {ListWafBlockedRequestsRequest} listWafBlockedRequestsRequest An instance of ListWafBlockedRequestsRequest
	* @method
	*/
	listWafBlockedRequests(listWafBlockedRequestsRequest){
		const params = this.Utils.cleanObject( listWafBlockedRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listWafBlockedRequestsRequest.pathParams.waasPolicyId}/reports/waf/blocked${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWafBlockedRequestsRequest.headers )
		}, JSON.stringify(listWafBlockedRequestsRequest.body));
	}


	/**
	* Gets the Web Application Firewall configuration details for a WAAS policy.
	* @param {GetWafConfigRequest} getWafConfigRequest An instance of GetWafConfigRequest
	* @method
	*/
	getWafConfig(getWafConfigRequest){
		const params = this.Utils.cleanObject( getWafConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${getWafConfigRequest.pathParams.waasPolicyId}/wafConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWafConfigRequest.headers )
		}, JSON.stringify(getWafConfigRequest.body));
	}


	/**
	* Updates the Web Application Firewall configuration for a specified WAAS policy.
	* @param {UpdateWafConfigRequest} updateWafConfigRequest An instance of UpdateWafConfigRequest
	* @method
	*/
	updateWafConfig(updateWafConfigRequest){
		const params = this.Utils.cleanObject( updateWafConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateWafConfigRequest.pathParams.waasPolicyId}/wafConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateWafConfigRequest.headers )
		}, JSON.stringify(updateWafConfigRequest.body));
	}


	/**
	* Gets structured Web Application Firewall event logs for a WAAS policy. The list is sorted by the timeObserved starting from the oldest recorded event (ascending).
	* @param {ListWafLogsRequest} listWafLogsRequest An instance of ListWafLogsRequest
	* @method
	*/
	listWafLogs(listWafLogsRequest){
		const params = this.Utils.cleanObject( listWafLogsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listWafLogsRequest.pathParams.waasPolicyId}/wafLogs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWafLogsRequest.headers )
		}, JSON.stringify(listWafLogsRequest.body));
	}


	/**
	* Gets the number of requests managed by a Web Application Firewall over a specified period of time, including blocked requests. Sorted by timeObserved with oldest requests first (ascending).
	* @param {ListWafRequestsRequest} listWafRequestsRequest An instance of ListWafRequestsRequest
	* @method
	*/
	listWafRequests(listWafRequestsRequest){
		const params = this.Utils.cleanObject( listWafRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listWafRequestsRequest.pathParams.waasPolicyId}/reports/waf/requests${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWafRequestsRequest.headers )
		}, JSON.stringify(listWafRequestsRequest.body));
	}


	/**
	* Gets the Web Application Firewall traffic data for a WAAS policy. Sorted by timeObserved with oldest data points first (ascending).
	* @param {ListWafTrafficRequest} listWafTrafficRequest An instance of ListWafTrafficRequest
	* @method
	*/
	listWafTraffic(listWafTrafficRequest){
		const params = this.Utils.cleanObject( listWafTrafficRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listWafTrafficRequest.pathParams.waasPolicyId}/reports/waf/traffic${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWafTrafficRequest.headers )
		}, JSON.stringify(listWafTrafficRequest.body));
	}


	/**
	* Gets the list of whitelists defined in the Web Application Firewall configuration for a WAAS policy.
	* @param {ListWhitelistsRequest} listWhitelistsRequest An instance of ListWhitelistsRequest
	* @method
	*/
	listWhitelists(listWhitelistsRequest){
		const params = this.Utils.cleanObject( listWhitelistsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${listWhitelistsRequest.pathParams.waasPolicyId}/wafConfig/whitelists${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWhitelistsRequest.headers )
		}, JSON.stringify(listWhitelistsRequest.body));
	}


	/**
	* Updates the list of IP addresses that bypass the Web Application Firewall for a WAAS policy. Supports both single IP addresses or subnet masks (CIDR notation). This operation can create, delete, update, and/or reorder whitelists depending on the structure of the request body. Updating an existing whitelist can be accomplished by changing the properties of the whitelist object with a non-empty key property in the list. Reordering of whitelists can be accomplished by changing the order of the whitelists in the list when updating. Creating a whitelist can be accomplished by adding a new whitelist object to the list without a key property. A key will be generated for the new whitelist upon update. Deleting a whitelist can be accomplished by removing the existing whitelist object from the list. Any existing whitelist with a key that is not present in the list of whitelists sent in the request will be deleted.
	* @param {UpdateWhitelistsRequest} updateWhitelistsRequest An instance of UpdateWhitelistsRequest
	* @method
	*/
	updateWhitelists(updateWhitelistsRequest){
		const params = this.Utils.cleanObject( updateWhitelistsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/waasPolicies/${updateWhitelistsRequest.pathParams.waasPolicyId}/wafConfig/whitelists${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateWhitelistsRequest.headers )
		}, JSON.stringify(updateWhitelistsRequest.body));
	}


	/**
	* Cancels a specified work request.
	* @param {CancelWorkRequestRequest} cancelWorkRequestRequest An instance of CancelWorkRequestRequest
	* @method
	*/
	cancelWorkRequest(cancelWorkRequestRequest){
		const params = this.Utils.cleanObject( cancelWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/workRequests/${cancelWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( cancelWorkRequestRequest.headers )
		}, JSON.stringify(cancelWorkRequestRequest.body));
	}


	/**
	* Gets the details of a specified work request.
	* @param {GetWorkRequestRequest} getWorkRequestRequest An instance of GetWorkRequestRequest
	* @method
	*/
	getWorkRequest(getWorkRequestRequest){
		const params = this.Utils.cleanObject( getWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/workRequests/${getWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWorkRequestRequest.headers )
		}, JSON.stringify(getWorkRequestRequest.body));
	}


	/**
	* Gets a list of subnets (CIDR notation) from which the WAAS EDGE may make requests. The subnets are owned by OCI and forward traffic to your origins. Allow traffic from these subnets to your origins. They are not associated with specific regions or compartments.
	* @param {ListWorkRequestsRequest} listWorkRequestsRequest An instance of ListWorkRequestsRequest
	* @method
	*/
	listWorkRequests(listWorkRequestsRequest){
		const params = this.Utils.cleanObject( listWorkRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181116/workRequests${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestsRequest.headers )
		}, JSON.stringify(listWorkRequestsRequest.body));
	}


}
module.exports = WAASClient;