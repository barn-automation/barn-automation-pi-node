const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Database Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class DatabaseClient
 * @extends AbstractApiClient
 */
class DatabaseClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://database.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates a new Autonomous Database.
	* @param {CreateAutonomousDatabaseRequest} createAutonomousDatabaseRequest An instance of CreateAutonomousDatabaseRequest
	* @method
	*/
	createAutonomousDatabase(createAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( createAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutonomousDatabaseRequest.headers )
		}, JSON.stringify(createAutonomousDatabaseRequest.body));
	}


	/**
	* Deletes the specified Autonomous Database.
	* @param {DeleteAutonomousDatabaseRequest} deleteAutonomousDatabaseRequest An instance of DeleteAutonomousDatabaseRequest
	* @method
	*/
	deleteAutonomousDatabase(deleteAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( deleteAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${deleteAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAutonomousDatabaseRequest.headers )
		}, JSON.stringify(deleteAutonomousDatabaseRequest.body));
	}


	/**
	* Creates and downloads a wallet for the specified Autonomous Transaction Processing database.
	* @param {GenerateAutonomousDatabaseWalletRequest} generateAutonomousDatabaseWalletRequest An instance of GenerateAutonomousDatabaseWalletRequest
	* @method
	*/
	generateAutonomousDatabaseWallet(generateAutonomousDatabaseWalletRequest){
		const params = this.Utils.cleanObject( generateAutonomousDatabaseWalletRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${generateAutonomousDatabaseWalletRequest.pathParams.autonomousDatabaseId}/actions/generateWallet${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( generateAutonomousDatabaseWalletRequest.headers )
		}, JSON.stringify(generateAutonomousDatabaseWalletRequest.body));
	}


	/**
	* Gets the details of the specified Autonomous Database.
	* @param {GetAutonomousDatabaseRequest} getAutonomousDatabaseRequest An instance of GetAutonomousDatabaseRequest
	* @method
	*/
	getAutonomousDatabase(getAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( getAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${getAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutonomousDatabaseRequest.headers )
		}, JSON.stringify(getAutonomousDatabaseRequest.body));
	}


	/**
	* Gets a list of Autonomous Databases.
	* @param {ListAutonomousDatabasesRequest} listAutonomousDatabasesRequest An instance of ListAutonomousDatabasesRequest
	* @method
	*/
	listAutonomousDatabases(listAutonomousDatabasesRequest){
		const params = this.Utils.cleanObject( listAutonomousDatabasesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutonomousDatabasesRequest.headers )
		}, JSON.stringify(listAutonomousDatabasesRequest.body));
	}


	/**
	* Restores an Autonomous Database based on the provided request parameters.
	* @param {RestoreAutonomousDatabaseRequest} restoreAutonomousDatabaseRequest An instance of RestoreAutonomousDatabaseRequest
	* @method
	*/
	restoreAutonomousDatabase(restoreAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( restoreAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${restoreAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}/actions/restore${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( restoreAutonomousDatabaseRequest.headers )
		}, JSON.stringify(restoreAutonomousDatabaseRequest.body));
	}


	/**
	* Starts the specified Autonomous Database.
	* @param {StartAutonomousDatabaseRequest} startAutonomousDatabaseRequest An instance of StartAutonomousDatabaseRequest
	* @method
	*/
	startAutonomousDatabase(startAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( startAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${startAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}/actions/start${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( startAutonomousDatabaseRequest.headers )
		}, JSON.stringify(startAutonomousDatabaseRequest.body));
	}


	/**
	* Stops the specified Autonomous Database.
	* @param {StopAutonomousDatabaseRequest} stopAutonomousDatabaseRequest An instance of StopAutonomousDatabaseRequest
	* @method
	*/
	stopAutonomousDatabase(stopAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( stopAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${stopAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}/actions/stop${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( stopAutonomousDatabaseRequest.headers )
		}, JSON.stringify(stopAutonomousDatabaseRequest.body));
	}


	/**
	* Updates the specified Autonomous Database with a new CPU core count and size.
	* @param {UpdateAutonomousDatabaseRequest} updateAutonomousDatabaseRequest An instance of UpdateAutonomousDatabaseRequest
	* @method
	*/
	updateAutonomousDatabase(updateAutonomousDatabaseRequest){
		const params = this.Utils.cleanObject( updateAutonomousDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabases/${updateAutonomousDatabaseRequest.pathParams.autonomousDatabaseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAutonomousDatabaseRequest.headers )
		}, JSON.stringify(updateAutonomousDatabaseRequest.body));
	}


	/**
	* Creates a new Autonomous Database backup for the specified database based on the provided request parameters.
	* @param {CreateAutonomousDatabaseBackupRequest} createAutonomousDatabaseBackupRequest An instance of CreateAutonomousDatabaseBackupRequest
	* @method
	*/
	createAutonomousDatabaseBackup(createAutonomousDatabaseBackupRequest){
		const params = this.Utils.cleanObject( createAutonomousDatabaseBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabaseBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutonomousDatabaseBackupRequest.headers )
		}, JSON.stringify(createAutonomousDatabaseBackupRequest.body));
	}


	/**
	* Gets information about the specified Autonomous Database backup.
	* @param {GetAutonomousDatabaseBackupRequest} getAutonomousDatabaseBackupRequest An instance of GetAutonomousDatabaseBackupRequest
	* @method
	*/
	getAutonomousDatabaseBackup(getAutonomousDatabaseBackupRequest){
		const params = this.Utils.cleanObject( getAutonomousDatabaseBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabaseBackups/${getAutonomousDatabaseBackupRequest.pathParams.autonomousDatabaseBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutonomousDatabaseBackupRequest.headers )
		}, JSON.stringify(getAutonomousDatabaseBackupRequest.body));
	}


	/**
	* Gets a list of Autonomous Database backups based on either the autonomousDatabaseId or compartmentId specified as a query parameter.
	* @param {ListAutonomousDatabaseBackupsRequest} listAutonomousDatabaseBackupsRequest An instance of ListAutonomousDatabaseBackupsRequest
	* @method
	*/
	listAutonomousDatabaseBackups(listAutonomousDatabaseBackupsRequest){
		const params = this.Utils.cleanObject( listAutonomousDatabaseBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDatabaseBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutonomousDatabaseBackupsRequest.headers )
		}, JSON.stringify(listAutonomousDatabaseBackupsRequest.body));
	}


	/**
	* Creates a new Autonomous Data Warehouse.
	* @param {CreateAutonomousDataWarehouseRequest} createAutonomousDataWarehouseRequest An instance of CreateAutonomousDataWarehouseRequest
	* @method
	*/
	createAutonomousDataWarehouse(createAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( createAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(createAutonomousDataWarehouseRequest.body));
	}


	/**
	* Deletes the specified Autonomous Data Warehouse.
	* @param {DeleteAutonomousDataWarehouseRequest} deleteAutonomousDataWarehouseRequest An instance of DeleteAutonomousDataWarehouseRequest
	* @method
	*/
	deleteAutonomousDataWarehouse(deleteAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( deleteAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${deleteAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(deleteAutonomousDataWarehouseRequest.body));
	}


	/**
	* Creates and downloads a wallet for the specified Autonomous Data Warehouse.
	* @param {GenerateAutonomousDataWarehouseWalletRequest} generateAutonomousDataWarehouseWalletRequest An instance of GenerateAutonomousDataWarehouseWalletRequest
	* @method
	*/
	generateAutonomousDataWarehouseWallet(generateAutonomousDataWarehouseWalletRequest){
		const params = this.Utils.cleanObject( generateAutonomousDataWarehouseWalletRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${generateAutonomousDataWarehouseWalletRequest.pathParams.autonomousDataWarehouseId}/actions/generateWallet${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( generateAutonomousDataWarehouseWalletRequest.headers )
		}, JSON.stringify(generateAutonomousDataWarehouseWalletRequest.body));
	}


	/**
	* Gets the details of the specified Autonomous Data Warehouse.
	* @param {GetAutonomousDataWarehouseRequest} getAutonomousDataWarehouseRequest An instance of GetAutonomousDataWarehouseRequest
	* @method
	*/
	getAutonomousDataWarehouse(getAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( getAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${getAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(getAutonomousDataWarehouseRequest.body));
	}


	/**
	* Gets a list of Autonomous Data Warehouses.
	* @param {ListAutonomousDataWarehousesRequest} listAutonomousDataWarehousesRequest An instance of ListAutonomousDataWarehousesRequest
	* @method
	*/
	listAutonomousDataWarehouses(listAutonomousDataWarehousesRequest){
		const params = this.Utils.cleanObject( listAutonomousDataWarehousesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutonomousDataWarehousesRequest.headers )
		}, JSON.stringify(listAutonomousDataWarehousesRequest.body));
	}


	/**
	* Restores an Autonomous Data Warehouse based on the provided request parameters.
	* @param {RestoreAutonomousDataWarehouseRequest} restoreAutonomousDataWarehouseRequest An instance of RestoreAutonomousDataWarehouseRequest
	* @method
	*/
	restoreAutonomousDataWarehouse(restoreAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( restoreAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${restoreAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}/actions/restore${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( restoreAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(restoreAutonomousDataWarehouseRequest.body));
	}


	/**
	* Starts the specified autonomous Data Warehouse.
	* @param {StartAutonomousDataWarehouseRequest} startAutonomousDataWarehouseRequest An instance of StartAutonomousDataWarehouseRequest
	* @method
	*/
	startAutonomousDataWarehouse(startAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( startAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${startAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}/actions/start${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( startAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(startAutonomousDataWarehouseRequest.body));
	}


	/**
	* Stops the specified Autonomous Data Warehouse.
	* @param {StopAutonomousDataWarehouseRequest} stopAutonomousDataWarehouseRequest An instance of StopAutonomousDataWarehouseRequest
	* @method
	*/
	stopAutonomousDataWarehouse(stopAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( stopAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${stopAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}/actions/stop${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( stopAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(stopAutonomousDataWarehouseRequest.body));
	}


	/**
	* Updates the specified Autonomous Data Warehouse with a new CPU core count and size.
	* @param {UpdateAutonomousDataWarehouseRequest} updateAutonomousDataWarehouseRequest An instance of UpdateAutonomousDataWarehouseRequest
	* @method
	*/
	updateAutonomousDataWarehouse(updateAutonomousDataWarehouseRequest){
		const params = this.Utils.cleanObject( updateAutonomousDataWarehouseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouses/${updateAutonomousDataWarehouseRequest.pathParams.autonomousDataWarehouseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAutonomousDataWarehouseRequest.headers )
		}, JSON.stringify(updateAutonomousDataWarehouseRequest.body));
	}


	/**
	* Creates a new Autonomous Data Warehouse backup for the specified database based on the provided request parameters.
	* @param {CreateAutonomousDataWarehouseBackupRequest} createAutonomousDataWarehouseBackupRequest An instance of CreateAutonomousDataWarehouseBackupRequest
	* @method
	*/
	createAutonomousDataWarehouseBackup(createAutonomousDataWarehouseBackupRequest){
		const params = this.Utils.cleanObject( createAutonomousDataWarehouseBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouseBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAutonomousDataWarehouseBackupRequest.headers )
		}, JSON.stringify(createAutonomousDataWarehouseBackupRequest.body));
	}


	/**
	* Gets information about the specified Autonomous Data Warehouse backup.
	* @param {GetAutonomousDataWarehouseBackupRequest} getAutonomousDataWarehouseBackupRequest An instance of GetAutonomousDataWarehouseBackupRequest
	* @method
	*/
	getAutonomousDataWarehouseBackup(getAutonomousDataWarehouseBackupRequest){
		const params = this.Utils.cleanObject( getAutonomousDataWarehouseBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouseBackups/${getAutonomousDataWarehouseBackupRequest.pathParams.autonomousDataWarehouseBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAutonomousDataWarehouseBackupRequest.headers )
		}, JSON.stringify(getAutonomousDataWarehouseBackupRequest.body));
	}


	/**
	* Gets a list of Autonomous Data Warehouse backups based on either the autonomousDataWarehouseId or compartmentId specified as a query parameter.
	* @param {ListAutonomousDataWarehouseBackupsRequest} listAutonomousDataWarehouseBackupsRequest An instance of ListAutonomousDataWarehouseBackupsRequest
	* @method
	*/
	listAutonomousDataWarehouseBackups(listAutonomousDataWarehouseBackupsRequest){
		const params = this.Utils.cleanObject( listAutonomousDataWarehouseBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/autonomousDataWarehouseBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAutonomousDataWarehouseBackupsRequest.headers )
		}, JSON.stringify(listAutonomousDataWarehouseBackupsRequest.body));
	}


	/**
	* Creates a new backup in the specified database based on the request parameters you provide. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.
	* @param {CreateBackupRequest} createBackupRequest An instance of CreateBackupRequest
	* @method
	*/
	createBackup(createBackupRequest){
		const params = this.Utils.cleanObject( createBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/backups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBackupRequest.headers )
		}, JSON.stringify(createBackupRequest.body));
	}


	/**
	* Deletes a full backup. You cannot delete automatic backups using this API.
	* @param {DeleteBackupRequest} deleteBackupRequest An instance of DeleteBackupRequest
	* @method
	*/
	deleteBackup(deleteBackupRequest){
		const params = this.Utils.cleanObject( deleteBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/backups/${deleteBackupRequest.pathParams.backupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBackupRequest.headers )
		}, JSON.stringify(deleteBackupRequest.body));
	}


	/**
	* Gets information about the specified backup.
	* @param {GetBackupRequest} getBackupRequest An instance of GetBackupRequest
	* @method
	*/
	getBackup(getBackupRequest){
		const params = this.Utils.cleanObject( getBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/backups/${getBackupRequest.pathParams.backupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBackupRequest.headers )
		}, JSON.stringify(getBackupRequest.body));
	}


	/**
	* Gets a list of backups based on the databaseId or compartmentId specified. Either one of the query parameters must be provided.
	* @param {ListBackupsRequest} listBackupsRequest An instance of ListBackupsRequest
	* @method
	*/
	listBackups(listBackupsRequest){
		const params = this.Utils.cleanObject( listBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/backups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBackupsRequest.headers )
		}, JSON.stringify(listBackupsRequest.body));
	}


	/**
	* Gets information about a specific database.
	* @param {GetDatabaseRequest} getDatabaseRequest An instance of GetDatabaseRequest
	* @method
	*/
	getDatabase(getDatabaseRequest){
		const params = this.Utils.cleanObject( getDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${getDatabaseRequest.pathParams.databaseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDatabaseRequest.headers )
		}, JSON.stringify(getDatabaseRequest.body));
	}


	/**
	* Gets a list of the databases in the specified database home.
	* @param {ListDatabasesRequest} listDatabasesRequest An instance of ListDatabasesRequest
	* @method
	*/
	listDatabases(listDatabasesRequest){
		const params = this.Utils.cleanObject( listDatabasesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDatabasesRequest.headers )
		}, JSON.stringify(listDatabasesRequest.body));
	}


	/**
	* Restore a Database based on the request parameters you provide.
	* @param {RestoreDatabaseRequest} restoreDatabaseRequest An instance of RestoreDatabaseRequest
	* @method
	*/
	restoreDatabase(restoreDatabaseRequest){
		const params = this.Utils.cleanObject( restoreDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${restoreDatabaseRequest.pathParams.databaseId}/actions/restore${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( restoreDatabaseRequest.headers )
		}, JSON.stringify(restoreDatabaseRequest.body));
	}


	/**
	* Update a Database based on the request parameters you provide.
	* @param {UpdateDatabaseRequest} updateDatabaseRequest An instance of UpdateDatabaseRequest
	* @method
	*/
	updateDatabase(updateDatabaseRequest){
		const params = this.Utils.cleanObject( updateDatabaseRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${updateDatabaseRequest.pathParams.databaseId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDatabaseRequest.headers )
		}, JSON.stringify(updateDatabaseRequest.body));
	}


	/**
	* Creates a new Data Guard association. A Data Guard association represents the replication relationship between the specified database and a peer database. For more information, see Using Oracle Data Guard.
	* @param {CreateDataGuardAssociationRequest} createDataGuardAssociationRequest An instance of CreateDataGuardAssociationRequest
	* @method
	*/
	createDataGuardAssociation(createDataGuardAssociationRequest){
		const params = this.Utils.cleanObject( createDataGuardAssociationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${createDataGuardAssociationRequest.pathParams.databaseId}/dataGuardAssociations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDataGuardAssociationRequest.headers )
		}, JSON.stringify(createDataGuardAssociationRequest.body));
	}


	/**
	* Performs a failover to transition the standby database identified by the databaseId parameter into the specified Data Guard association's primary role after the existing primary database fails or becomes unreachable.
	* @param {FailoverDataGuardAssociationRequest} failoverDataGuardAssociationRequest An instance of FailoverDataGuardAssociationRequest
	* @method
	*/
	failoverDataGuardAssociation(failoverDataGuardAssociationRequest){
		const params = this.Utils.cleanObject( failoverDataGuardAssociationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${failoverDataGuardAssociationRequest.pathParams.databaseId}/dataGuardAssociations/${failoverDataGuardAssociationRequest.pathParams.dataGuardAssociationId}/actions/failover${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( failoverDataGuardAssociationRequest.headers )
		}, JSON.stringify(failoverDataGuardAssociationRequest.body));
	}


	/**
	* Gets the specified Data Guard association's configuration information.
	* @param {GetDataGuardAssociationRequest} getDataGuardAssociationRequest An instance of GetDataGuardAssociationRequest
	* @method
	*/
	getDataGuardAssociation(getDataGuardAssociationRequest){
		const params = this.Utils.cleanObject( getDataGuardAssociationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${getDataGuardAssociationRequest.pathParams.databaseId}/dataGuardAssociations/${getDataGuardAssociationRequest.pathParams.dataGuardAssociationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDataGuardAssociationRequest.headers )
		}, JSON.stringify(getDataGuardAssociationRequest.body));
	}


	/**
	* Lists all Data Guard associations for the specified database.
	* @param {ListDataGuardAssociationsRequest} listDataGuardAssociationsRequest An instance of ListDataGuardAssociationsRequest
	* @method
	*/
	listDataGuardAssociations(listDataGuardAssociationsRequest){
		const params = this.Utils.cleanObject( listDataGuardAssociationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${listDataGuardAssociationsRequest.pathParams.databaseId}/dataGuardAssociations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDataGuardAssociationsRequest.headers )
		}, JSON.stringify(listDataGuardAssociationsRequest.body));
	}


	/**
	* Reinstates the database identified by the databaseId parameter into the standby role in a Data Guard association.
	* @param {ReinstateDataGuardAssociationRequest} reinstateDataGuardAssociationRequest An instance of ReinstateDataGuardAssociationRequest
	* @method
	*/
	reinstateDataGuardAssociation(reinstateDataGuardAssociationRequest){
		const params = this.Utils.cleanObject( reinstateDataGuardAssociationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${reinstateDataGuardAssociationRequest.pathParams.databaseId}/dataGuardAssociations/${reinstateDataGuardAssociationRequest.pathParams.dataGuardAssociationId}/actions/reinstate${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( reinstateDataGuardAssociationRequest.headers )
		}, JSON.stringify(reinstateDataGuardAssociationRequest.body));
	}


	/**
	* Performs a switchover to transition the primary database of a Data Guard association into a standby role. The standby database associated with the dataGuardAssociationId assumes the primary database role.
	* @param {SwitchoverDataGuardAssociationRequest} switchoverDataGuardAssociationRequest An instance of SwitchoverDataGuardAssociationRequest
	* @method
	*/
	switchoverDataGuardAssociation(switchoverDataGuardAssociationRequest){
		const params = this.Utils.cleanObject( switchoverDataGuardAssociationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/databases/${switchoverDataGuardAssociationRequest.pathParams.databaseId}/dataGuardAssociations/${switchoverDataGuardAssociationRequest.pathParams.dataGuardAssociationId}/actions/switchover${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( switchoverDataGuardAssociationRequest.headers )
		}, JSON.stringify(switchoverDataGuardAssociationRequest.body));
	}


	/**
	* Creates a new database home in the specified DB system based on the request parameters you provide.
	* @param {CreateDbHomeRequest} createDbHomeRequest An instance of CreateDbHomeRequest
	* @method
	*/
	createDbHome(createDbHomeRequest){
		const params = this.Utils.cleanObject( createDbHomeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDbHomeRequest.headers )
		}, JSON.stringify(createDbHomeRequest.body));
	}


	/**
	* Deletes a DB Home. The DB Home and its database data are local to the DB system and will be lost when it is deleted. Oracle recommends that you back up any data in the DB system prior to deleting it.
	* @param {DeleteDbHomeRequest} deleteDbHomeRequest An instance of DeleteDbHomeRequest
	* @method
	*/
	deleteDbHome(deleteDbHomeRequest){
		const params = this.Utils.cleanObject( deleteDbHomeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${deleteDbHomeRequest.pathParams.dbHomeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDbHomeRequest.headers )
		}, JSON.stringify(deleteDbHomeRequest.body));
	}


	/**
	* Gets information about the specified database home.
	* @param {GetDbHomeRequest} getDbHomeRequest An instance of GetDbHomeRequest
	* @method
	*/
	getDbHome(getDbHomeRequest){
		const params = this.Utils.cleanObject( getDbHomeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${getDbHomeRequest.pathParams.dbHomeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbHomeRequest.headers )
		}, JSON.stringify(getDbHomeRequest.body));
	}


	/**
	* Gets a list of database homes in the specified DB system and compartment. A database home is a directory where Oracle Database software is installed.
	* @param {ListDbHomesRequest} listDbHomesRequest An instance of ListDbHomesRequest
	* @method
	*/
	listDbHomes(listDbHomesRequest){
		const params = this.Utils.cleanObject( listDbHomesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbHomesRequest.headers )
		}, JSON.stringify(listDbHomesRequest.body));
	}


	/**
	* Patches the specified dbHome.
	* @param {UpdateDbHomeRequest} updateDbHomeRequest An instance of UpdateDbHomeRequest
	* @method
	*/
	updateDbHome(updateDbHomeRequest){
		const params = this.Utils.cleanObject( updateDbHomeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${updateDbHomeRequest.pathParams.dbHomeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDbHomeRequest.headers )
		}, JSON.stringify(updateDbHomeRequest.body));
	}


	/**
	* Performs one of the following power actions on the specified DB node:
	* @param {DbNodeActionRequest} dbNodeActionRequest An instance of DbNodeActionRequest
	* @method
	*/
	dbNodeAction(dbNodeActionRequest){
		const params = this.Utils.cleanObject( dbNodeActionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbNodes/${dbNodeActionRequest.pathParams.dbNodeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( dbNodeActionRequest.headers )
		}, JSON.stringify(dbNodeActionRequest.body));
	}


	/**
	* Gets information about the specified database node.
	* @param {GetDbNodeRequest} getDbNodeRequest An instance of GetDbNodeRequest
	* @method
	*/
	getDbNode(getDbNodeRequest){
		const params = this.Utils.cleanObject( getDbNodeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbNodes/${getDbNodeRequest.pathParams.dbNodeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbNodeRequest.headers )
		}, JSON.stringify(getDbNodeRequest.body));
	}


	/**
	* Gets a list of database nodes in the specified DB system and compartment. A database node is a server running database software.
	* @param {ListDbNodesRequest} listDbNodesRequest An instance of ListDbNodesRequest
	* @method
	*/
	listDbNodes(listDbNodesRequest){
		const params = this.Utils.cleanObject( listDbNodesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbNodes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbNodesRequest.headers )
		}, JSON.stringify(listDbNodesRequest.body));
	}


	/**
	* Gets information about the specified DB system.
	* @param {GetDbSystemRequest} getDbSystemRequest An instance of GetDbSystemRequest
	* @method
	*/
	getDbSystem(getDbSystemRequest){
		const params = this.Utils.cleanObject( getDbSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${getDbSystemRequest.pathParams.dbSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbSystemRequest.headers )
		}, JSON.stringify(getDbSystemRequest.body));
	}


	/**
	* Launches a new DB system in the specified compartment and availability domain. The Oracle Database edition that you specify applies to all the databases on that DB system. The selected edition cannot be changed.
	* @param {LaunchDbSystemRequest} launchDbSystemRequest An instance of LaunchDbSystemRequest
	* @method
	*/
	launchDbSystem(launchDbSystemRequest){
		const params = this.Utils.cleanObject( launchDbSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( launchDbSystemRequest.headers )
		}, JSON.stringify(launchDbSystemRequest.body));
	}


	/**
	* Gets a list of the DB systems in the specified compartment. You can specify a backupId to list only the DB systems that support creating a database using this backup in this compartment.
	* @param {ListDbSystemsRequest} listDbSystemsRequest An instance of ListDbSystemsRequest
	* @method
	*/
	listDbSystems(listDbSystemsRequest){
		const params = this.Utils.cleanObject( listDbSystemsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbSystemsRequest.headers )
		}, JSON.stringify(listDbSystemsRequest.body));
	}


	/**
	* Terminates a DB system and permanently deletes it and any databases running on it, and any storage volumes attached to it. The database data is local to the DB system and will be lost when the system is terminated. Oracle recommends that you back up any data in the DB system prior to terminating it.
	* @param {TerminateDbSystemRequest} terminateDbSystemRequest An instance of TerminateDbSystemRequest
	* @method
	*/
	terminateDbSystem(terminateDbSystemRequest){
		const params = this.Utils.cleanObject( terminateDbSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${terminateDbSystemRequest.pathParams.dbSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( terminateDbSystemRequest.headers )
		}, JSON.stringify(terminateDbSystemRequest.body));
	}


	/**
	* Updates the properties of a DB system, such as the CPU core count.
	* @param {UpdateDbSystemRequest} updateDbSystemRequest An instance of UpdateDbSystemRequest
	* @method
	*/
	updateDbSystem(updateDbSystemRequest){
		const params = this.Utils.cleanObject( updateDbSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${updateDbSystemRequest.pathParams.dbSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDbSystemRequest.headers )
		}, JSON.stringify(updateDbSystemRequest.body));
	}


	/**
	* Gets a list of the shapes that can be used to launch a new DB system. The shape determines resources to allocate to the DB system - CPU cores and memory for VM shapes; CPU cores, memory and storage for non-VM (or bare metal) shapes.
	* @param {ListDbSystemShapesRequest} listDbSystemShapesRequest An instance of ListDbSystemShapesRequest
	* @method
	*/
	listDbSystemShapes(listDbSystemShapesRequest){
		const params = this.Utils.cleanObject( listDbSystemShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystemShapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbSystemShapesRequest.headers )
		}, JSON.stringify(listDbSystemShapesRequest.body));
	}


	/**
	* Gets a list of supported Oracle Database versions.
	* @param {ListDbVersionsRequest} listDbVersionsRequest An instance of ListDbVersionsRequest
	* @method
	*/
	listDbVersions(listDbVersionsRequest){
		const params = this.Utils.cleanObject( listDbVersionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbVersions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbVersionsRequest.headers )
		}, JSON.stringify(listDbVersionsRequest.body));
	}


	/**
	* Changes the status of the standalone backup resource to ACTIVE after the backup is created from the on-premises database and placed in Oracle Cloud Infrastructure Object Storage.
	* @param {CompleteExternalBackupJobRequest} completeExternalBackupJobRequest An instance of CompleteExternalBackupJobRequest
	* @method
	*/
	completeExternalBackupJob(completeExternalBackupJobRequest){
		const params = this.Utils.cleanObject( completeExternalBackupJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/externalBackupJobs/${completeExternalBackupJobRequest.pathParams.backupId}/actions/complete${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( completeExternalBackupJobRequest.headers )
		}, JSON.stringify(completeExternalBackupJobRequest.body));
	}


	/**
	* Creates a new backup resource and returns the information the caller needs to back up an on-premises Oracle Database to Oracle Cloud Infrastructure.
	* @param {CreateExternalBackupJobRequest} createExternalBackupJobRequest An instance of CreateExternalBackupJobRequest
	* @method
	*/
	createExternalBackupJob(createExternalBackupJobRequest){
		const params = this.Utils.cleanObject( createExternalBackupJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/externalBackupJobs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createExternalBackupJobRequest.headers )
		}, JSON.stringify(createExternalBackupJobRequest.body));
	}


	/**
	* Gets information about the specified external backup job.
	* @param {GetExternalBackupJobRequest} getExternalBackupJobRequest An instance of GetExternalBackupJobRequest
	* @method
	*/
	getExternalBackupJob(getExternalBackupJobRequest){
		const params = this.Utils.cleanObject( getExternalBackupJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/externalBackupJobs/${getExternalBackupJobRequest.pathParams.backupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getExternalBackupJobRequest.headers )
		}, JSON.stringify(getExternalBackupJobRequest.body));
	}


	/**
	* Gets information about a specified patch package.
	* @param {GetDbHomePatchRequest} getDbHomePatchRequest An instance of GetDbHomePatchRequest
	* @method
	*/
	getDbHomePatch(getDbHomePatchRequest){
		const params = this.Utils.cleanObject( getDbHomePatchRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${getDbHomePatchRequest.pathParams.dbHomeId}/patches/${getDbHomePatchRequest.pathParams.patchId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbHomePatchRequest.headers )
		}, JSON.stringify(getDbHomePatchRequest.body));
	}


	/**
	* Gets information about a specified patch package.
	* @param {GetDbSystemPatchRequest} getDbSystemPatchRequest An instance of GetDbSystemPatchRequest
	* @method
	*/
	getDbSystemPatch(getDbSystemPatchRequest){
		const params = this.Utils.cleanObject( getDbSystemPatchRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${getDbSystemPatchRequest.pathParams.dbSystemId}/patches/${getDbSystemPatchRequest.pathParams.patchId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbSystemPatchRequest.headers )
		}, JSON.stringify(getDbSystemPatchRequest.body));
	}


	/**
	* Lists patches applicable to the requested database home.
	* @param {ListDbHomePatchesRequest} listDbHomePatchesRequest An instance of ListDbHomePatchesRequest
	* @method
	*/
	listDbHomePatches(listDbHomePatchesRequest){
		const params = this.Utils.cleanObject( listDbHomePatchesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${listDbHomePatchesRequest.pathParams.dbHomeId}/patches${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbHomePatchesRequest.headers )
		}, JSON.stringify(listDbHomePatchesRequest.body));
	}


	/**
	* Lists the patches applicable to the requested DB system.
	* @param {ListDbSystemPatchesRequest} listDbSystemPatchesRequest An instance of ListDbSystemPatchesRequest
	* @method
	*/
	listDbSystemPatches(listDbSystemPatchesRequest){
		const params = this.Utils.cleanObject( listDbSystemPatchesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${listDbSystemPatchesRequest.pathParams.dbSystemId}/patches${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbSystemPatchesRequest.headers )
		}, JSON.stringify(listDbSystemPatchesRequest.body));
	}


	/**
	* Gets the patch history details for the specified patchHistoryEntryId
	* @param {GetDbHomePatchHistoryEntryRequest} getDbHomePatchHistoryEntryRequest An instance of GetDbHomePatchHistoryEntryRequest
	* @method
	*/
	getDbHomePatchHistoryEntry(getDbHomePatchHistoryEntryRequest){
		const params = this.Utils.cleanObject( getDbHomePatchHistoryEntryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${getDbHomePatchHistoryEntryRequest.pathParams.dbHomeId}/patchHistoryEntries/${getDbHomePatchHistoryEntryRequest.pathParams.patchHistoryEntryId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbHomePatchHistoryEntryRequest.headers )
		}, JSON.stringify(getDbHomePatchHistoryEntryRequest.body));
	}


	/**
	* Gets the patch history details for the specified patchHistoryEntryId.
	* @param {GetDbSystemPatchHistoryEntryRequest} getDbSystemPatchHistoryEntryRequest An instance of GetDbSystemPatchHistoryEntryRequest
	* @method
	*/
	getDbSystemPatchHistoryEntry(getDbSystemPatchHistoryEntryRequest){
		const params = this.Utils.cleanObject( getDbSystemPatchHistoryEntryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${getDbSystemPatchHistoryEntryRequest.pathParams.dbSystemId}/patchHistoryEntries/${getDbSystemPatchHistoryEntryRequest.pathParams.patchHistoryEntryId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDbSystemPatchHistoryEntryRequest.headers )
		}, JSON.stringify(getDbSystemPatchHistoryEntryRequest.body));
	}


	/**
	* Gets history of the actions taken for patches for the specified database home.
	* @param {ListDbHomePatchHistoryEntriesRequest} listDbHomePatchHistoryEntriesRequest An instance of ListDbHomePatchHistoryEntriesRequest
	* @method
	*/
	listDbHomePatchHistoryEntries(listDbHomePatchHistoryEntriesRequest){
		const params = this.Utils.cleanObject( listDbHomePatchHistoryEntriesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbHomes/${listDbHomePatchHistoryEntriesRequest.pathParams.dbHomeId}/patchHistoryEntries${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbHomePatchHistoryEntriesRequest.headers )
		}, JSON.stringify(listDbHomePatchHistoryEntriesRequest.body));
	}


	/**
	* Gets the history of the patch actions performed on the specified DB system.
	* @param {ListDbSystemPatchHistoryEntriesRequest} listDbSystemPatchHistoryEntriesRequest An instance of ListDbSystemPatchHistoryEntriesRequest
	* @method
	*/
	listDbSystemPatchHistoryEntries(listDbSystemPatchHistoryEntriesRequest){
		const params = this.Utils.cleanObject( listDbSystemPatchHistoryEntriesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dbSystems/${listDbSystemPatchHistoryEntriesRequest.pathParams.dbSystemId}/patchHistoryEntries${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDbSystemPatchHistoryEntriesRequest.headers )
		}, JSON.stringify(listDbSystemPatchHistoryEntriesRequest.body));
	}


}
module.exports = DatabaseClient;