const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Key Management Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class KeyManagementClient
 * @extends AbstractApiClient
 */
class KeyManagementClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://kms.${this.region}.oraclecloud.com`;
	}


	/**
	* Decrypts data using the given DecryptDataDetails resource.
	* @param {DecryptRequest} decryptRequest An instance of DecryptRequest
	* @method
	*/
	decrypt(decryptRequest){
		const params = this.Utils.cleanObject( decryptRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/decrypt${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( decryptRequest.headers )
		}, JSON.stringify(decryptRequest.body));
	}


	/**
	* Encrypts data using the given EncryptDataDetails resource. Plaintext included in the example request is a base64-encoded value of a UTF-8 string.
	* @param {EncryptRequest} encryptRequest An instance of EncryptRequest
	* @method
	*/
	encrypt(encryptRequest){
		const params = this.Utils.cleanObject( encryptRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/encrypt${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( encryptRequest.headers )
		}, JSON.stringify(encryptRequest.body));
	}


	/**
	* Generates a key that you can use to encrypt or decrypt data.
	* @param {GenerateDataEncryptionKeyRequest} generateDataEncryptionKeyRequest An instance of GenerateDataEncryptionKeyRequest
	* @method
	*/
	generateDataEncryptionKey(generateDataEncryptionKeyRequest){
		const params = this.Utils.cleanObject( generateDataEncryptionKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/generateDataEncryptionKey${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( generateDataEncryptionKeyRequest.headers )
		}, JSON.stringify(generateDataEncryptionKeyRequest.body));
	}


	/**
	* Creates a new key.
	* @param {CreateKeyRequest} createKeyRequest An instance of CreateKeyRequest
	* @method
	*/
	createKey(createKeyRequest){
		const params = this.Utils.cleanObject( createKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createKeyRequest.headers )
		}, JSON.stringify(createKeyRequest.body));
	}


	/**
	* Disables a key to make it unavailable for encryption or decryption.
	* @param {DisableKeyRequest} disableKeyRequest An instance of DisableKeyRequest
	* @method
	*/
	disableKey(disableKeyRequest){
		const params = this.Utils.cleanObject( disableKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${disableKeyRequest.pathParams.keyId}/actions/disable${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( disableKeyRequest.headers )
		}, JSON.stringify(disableKeyRequest.body));
	}


	/**
	* Enables a key to make it available for encryption or decryption.
	* @param {EnableKeyRequest} enableKeyRequest An instance of EnableKeyRequest
	* @method
	*/
	enableKey(enableKeyRequest){
		const params = this.Utils.cleanObject( enableKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${enableKeyRequest.pathParams.keyId}/actions/enable${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( enableKeyRequest.headers )
		}, JSON.stringify(enableKeyRequest.body));
	}


	/**
	* Gets information about the specified key.
	* @param {GetKeyRequest} getKeyRequest An instance of GetKeyRequest
	* @method
	*/
	getKey(getKeyRequest){
		const params = this.Utils.cleanObject( getKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${getKeyRequest.pathParams.keyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getKeyRequest.headers )
		}, JSON.stringify(getKeyRequest.body));
	}


	/**
	* Updates the properties of a key. Specifically, you can update the displayName, freeformTags, and definedTags properties. Furthermore, the key must in an ACTIVE or CREATING state to be updated.
	* @param {UpdateKeyRequest} updateKeyRequest An instance of UpdateKeyRequest
	* @method
	*/
	updateKey(updateKeyRequest){
		const params = this.Utils.cleanObject( updateKeyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${updateKeyRequest.pathParams.keyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateKeyRequest.headers )
		}, JSON.stringify(updateKeyRequest.body));
	}


	/**
	* Lists the keys in the specified vault and compartment.
	* @param {ListKeysRequest} listKeysRequest An instance of ListKeysRequest
	* @method
	*/
	listKeys(listKeysRequest){
		const params = this.Utils.cleanObject( listKeysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listKeysRequest.headers )
		}, JSON.stringify(listKeysRequest.body));
	}


	/**
	* Generates new cryptographic material for a key. The key must be in an ENABLED state to be rotated.
	* @param {CreateKeyVersionRequest} createKeyVersionRequest An instance of CreateKeyVersionRequest
	* @method
	*/
	createKeyVersion(createKeyVersionRequest){
		const params = this.Utils.cleanObject( createKeyVersionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${createKeyVersionRequest.pathParams.keyId}/keyVersions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createKeyVersionRequest.headers )
		}, JSON.stringify(createKeyVersionRequest.body));
	}


	/**
	* Gets information about the specified key version.
	* @param {GetKeyVersionRequest} getKeyVersionRequest An instance of GetKeyVersionRequest
	* @method
	*/
	getKeyVersion(getKeyVersionRequest){
		const params = this.Utils.cleanObject( getKeyVersionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${getKeyVersionRequest.pathParams.keyId}/keyVersions/${getKeyVersionRequest.pathParams.keyVersionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getKeyVersionRequest.headers )
		}, JSON.stringify(getKeyVersionRequest.body));
	}


	/**
	* Lists all key versions for the specified key.
	* @param {ListKeyVersionsRequest} listKeyVersionsRequest An instance of ListKeyVersionsRequest
	* @method
	*/
	listKeyVersions(listKeyVersionsRequest){
		const params = this.Utils.cleanObject( listKeyVersionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/keys/${listKeyVersionsRequest.pathParams.keyId}/keyVersions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listKeyVersionsRequest.headers )
		}, JSON.stringify(listKeyVersionsRequest.body));
	}


	/**
	* Cancels the scheduled deletion of the specified vault. Canceling a scheduled deletion restores the vault and all keys in it to the respective states they were in before the deletion was scheduled.
	* @param {CancelVaultDeletionRequest} cancelVaultDeletionRequest An instance of CancelVaultDeletionRequest
	* @method
	*/
	cancelVaultDeletion(cancelVaultDeletionRequest){
		const params = this.Utils.cleanObject( cancelVaultDeletionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults/${cancelVaultDeletionRequest.pathParams.vaultId}/actions/cancelDeletion${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( cancelVaultDeletionRequest.headers )
		}, JSON.stringify(cancelVaultDeletionRequest.body));
	}


	/**
	* Creates a new vault. The type of vault you create determines key placement, pricing, and available options. Options include storage isolation, a dedicated service endpoint instead of a shared service endpoint for API calls, and a dedicated hardware security module (HSM) or a multitenant HSM.
	* @param {CreateVaultRequest} createVaultRequest An instance of CreateVaultRequest
	* @method
	*/
	createVault(createVaultRequest){
		const params = this.Utils.cleanObject( createVaultRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVaultRequest.headers )
		}, JSON.stringify(createVaultRequest.body));
	}


	/**
	* Gets the specified vault's configuration information.
	* @param {GetVaultRequest} getVaultRequest An instance of GetVaultRequest
	* @method
	*/
	getVault(getVaultRequest){
		const params = this.Utils.cleanObject( getVaultRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults/${getVaultRequest.pathParams.vaultId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVaultRequest.headers )
		}, JSON.stringify(getVaultRequest.body));
	}


	/**
	* Schedules the deletion of the specified vault. This sets the state of the vault and all keys in it to PENDING_DELETION and then deletes them after the retention period ends.
	* @param {ScheduleVaultDeletionRequest} scheduleVaultDeletionRequest An instance of ScheduleVaultDeletionRequest
	* @method
	*/
	scheduleVaultDeletion(scheduleVaultDeletionRequest){
		const params = this.Utils.cleanObject( scheduleVaultDeletionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults/${scheduleVaultDeletionRequest.pathParams.vaultId}/actions/scheduleDeletion${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( scheduleVaultDeletionRequest.headers )
		}, JSON.stringify(scheduleVaultDeletionRequest.body));
	}


	/**
	* Updates the properties of a vault. Specifically, you can update the displayName, freeformTags, and definedTags properties. Furthermore, the vault must be in an ACTIVE or CREATING state to be updated.
	* @param {UpdateVaultRequest} updateVaultRequest An instance of UpdateVaultRequest
	* @method
	*/
	updateVault(updateVaultRequest){
		const params = this.Utils.cleanObject( updateVaultRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults/${updateVaultRequest.pathParams.vaultId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVaultRequest.headers )
		}, JSON.stringify(updateVaultRequest.body));
	}


	/**
	* Lists the vaults in the specified compartment.
	* @param {ListVaultsRequest} listVaultsRequest An instance of ListVaultsRequest
	* @method
	*/
	listVaults(listVaultsRequest){
		const params = this.Utils.cleanObject( listVaultsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180608/vaults${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVaultsRequest.headers )
		}, JSON.stringify(listVaultsRequest.body));
	}


}
module.exports = KeyManagementClient;