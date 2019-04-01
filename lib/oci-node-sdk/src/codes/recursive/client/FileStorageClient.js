const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the File Storage Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class FileStorageClient
 * @extends AbstractApiClient
 */
class FileStorageClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://filestorage.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates a new export in the specified export set, path, and file system.
	* @param {CreateExportRequest} createExportRequest An instance of CreateExportRequest
	* @method
	*/
	createExport(createExportRequest){
		const params = this.Utils.cleanObject( createExportRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exports${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createExportRequest.headers )
		}, JSON.stringify(createExportRequest.body));
	}


	/**
	* Deletes the specified export.
	* @param {DeleteExportRequest} deleteExportRequest An instance of DeleteExportRequest
	* @method
	*/
	deleteExport(deleteExportRequest){
		const params = this.Utils.cleanObject( deleteExportRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exports/${deleteExportRequest.pathParams.exportId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteExportRequest.headers )
		}, JSON.stringify(deleteExportRequest.body));
	}


	/**
	* Gets the specified export's information.
	* @param {GetExportRequest} getExportRequest An instance of GetExportRequest
	* @method
	*/
	getExport(getExportRequest){
		const params = this.Utils.cleanObject( getExportRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exports/${getExportRequest.pathParams.exportId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getExportRequest.headers )
		}, JSON.stringify(getExportRequest.body));
	}


	/**
	* Updates the specified export's information.
	* @param {UpdateExportRequest} updateExportRequest An instance of UpdateExportRequest
	* @method
	*/
	updateExport(updateExportRequest){
		const params = this.Utils.cleanObject( updateExportRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exports/${updateExportRequest.pathParams.exportId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateExportRequest.headers )
		}, JSON.stringify(updateExportRequest.body));
	}


	/**
	* Gets the specified export set's information.
	* @param {GetExportSetRequest} getExportSetRequest An instance of GetExportSetRequest
	* @method
	*/
	getExportSet(getExportSetRequest){
		const params = this.Utils.cleanObject( getExportSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exportSets/${getExportSetRequest.pathParams.exportSetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getExportSetRequest.headers )
		}, JSON.stringify(getExportSetRequest.body));
	}


	/**
	* Updates the specified export set's information.
	* @param {UpdateExportSetRequest} updateExportSetRequest An instance of UpdateExportSetRequest
	* @method
	*/
	updateExportSet(updateExportSetRequest){
		const params = this.Utils.cleanObject( updateExportSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exportSets/${updateExportSetRequest.pathParams.exportSetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateExportSetRequest.headers )
		}, JSON.stringify(updateExportSetRequest.body));
	}


	/**
	* Lists the export set resources in the specified compartment.
	* @param {ListExportSetsRequest} listExportSetsRequest An instance of ListExportSetsRequest
	* @method
	*/
	listExportSets(listExportSetsRequest){
		const params = this.Utils.cleanObject( listExportSetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exportSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listExportSetsRequest.headers )
		}, JSON.stringify(listExportSetsRequest.body));
	}


	/**
	* Lists export resources by compartment, file system, or export set. You must specify an export set ID, a file system ID, and / or a compartment ID.
	* @param {ListExportsRequest} listExportsRequest An instance of ListExportsRequest
	* @method
	*/
	listExports(listExportsRequest){
		const params = this.Utils.cleanObject( listExportsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/exports${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listExportsRequest.headers )
		}, JSON.stringify(listExportsRequest.body));
	}


	/**
	* Creates a new file system in the specified compartment and availability domain. Instances can mount file systems in another availability domain, but doing so might increase latency when compared to mounting instances in the same availability domain.
	* @param {CreateFileSystemRequest} createFileSystemRequest An instance of CreateFileSystemRequest
	* @method
	*/
	createFileSystem(createFileSystemRequest){
		const params = this.Utils.cleanObject( createFileSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/fileSystems${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createFileSystemRequest.headers )
		}, JSON.stringify(createFileSystemRequest.body));
	}


	/**
	* Deletes the specified file system. Before you delete the file system, verify that no remaining export resources still reference it. Deleting a file system also deletes all of its snapshots.
	* @param {DeleteFileSystemRequest} deleteFileSystemRequest An instance of DeleteFileSystemRequest
	* @method
	*/
	deleteFileSystem(deleteFileSystemRequest){
		const params = this.Utils.cleanObject( deleteFileSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/fileSystems/${deleteFileSystemRequest.pathParams.fileSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteFileSystemRequest.headers )
		}, JSON.stringify(deleteFileSystemRequest.body));
	}


	/**
	* Gets the specified file system's information.
	* @param {GetFileSystemRequest} getFileSystemRequest An instance of GetFileSystemRequest
	* @method
	*/
	getFileSystem(getFileSystemRequest){
		const params = this.Utils.cleanObject( getFileSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/fileSystems/${getFileSystemRequest.pathParams.fileSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getFileSystemRequest.headers )
		}, JSON.stringify(getFileSystemRequest.body));
	}


	/**
	* Updates the specified file system's information. You can use this operation to rename a file system.
	* @param {UpdateFileSystemRequest} updateFileSystemRequest An instance of UpdateFileSystemRequest
	* @method
	*/
	updateFileSystem(updateFileSystemRequest){
		const params = this.Utils.cleanObject( updateFileSystemRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/fileSystems/${updateFileSystemRequest.pathParams.fileSystemId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateFileSystemRequest.headers )
		}, JSON.stringify(updateFileSystemRequest.body));
	}


	/**
	* Lists the file system resources in the specified compartment.
	* @param {ListFileSystemsRequest} listFileSystemsRequest An instance of ListFileSystemsRequest
	* @method
	*/
	listFileSystems(listFileSystemsRequest){
		const params = this.Utils.cleanObject( listFileSystemsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/fileSystems${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listFileSystemsRequest.headers )
		}, JSON.stringify(listFileSystemsRequest.body));
	}


	/**
	* Creates a new mount target in the specified compartment and subnet. You can associate a file system with a mount target only when they exist in the same availability domain. Instances can connect to mount targets in another availablity domain, but you might see higher latency than with instances in the same availability domain as the mount target.
	* @param {CreateMountTargetRequest} createMountTargetRequest An instance of CreateMountTargetRequest
	* @method
	*/
	createMountTarget(createMountTargetRequest){
		const params = this.Utils.cleanObject( createMountTargetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/mountTargets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createMountTargetRequest.headers )
		}, JSON.stringify(createMountTargetRequest.body));
	}


	/**
	* Deletes the specified mount target. This operation also deletes the mount target's VNICs.
	* @param {DeleteMountTargetRequest} deleteMountTargetRequest An instance of DeleteMountTargetRequest
	* @method
	*/
	deleteMountTarget(deleteMountTargetRequest){
		const params = this.Utils.cleanObject( deleteMountTargetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/mountTargets/${deleteMountTargetRequest.pathParams.mountTargetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteMountTargetRequest.headers )
		}, JSON.stringify(deleteMountTargetRequest.body));
	}


	/**
	* Gets the specified mount target's information.
	* @param {GetMountTargetRequest} getMountTargetRequest An instance of GetMountTargetRequest
	* @method
	*/
	getMountTarget(getMountTargetRequest){
		const params = this.Utils.cleanObject( getMountTargetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/mountTargets/${getMountTargetRequest.pathParams.mountTargetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getMountTargetRequest.headers )
		}, JSON.stringify(getMountTargetRequest.body));
	}


	/**
	* Updates the specified mount target's information.
	* @param {UpdateMountTargetRequest} updateMountTargetRequest An instance of UpdateMountTargetRequest
	* @method
	*/
	updateMountTarget(updateMountTargetRequest){
		const params = this.Utils.cleanObject( updateMountTargetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/mountTargets/${updateMountTargetRequest.pathParams.mountTargetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateMountTargetRequest.headers )
		}, JSON.stringify(updateMountTargetRequest.body));
	}


	/**
	* Lists the mount target resources in the specified compartment.
	* @param {ListMountTargetsRequest} listMountTargetsRequest An instance of ListMountTargetsRequest
	* @method
	*/
	listMountTargets(listMountTargetsRequest){
		const params = this.Utils.cleanObject( listMountTargetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/mountTargets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listMountTargetsRequest.headers )
		}, JSON.stringify(listMountTargetsRequest.body));
	}


	/**
	* Creates a new snapshot of the specified file system. You can access the snapshot at .snapshot/<name>.
	* @param {CreateSnapshotRequest} createSnapshotRequest An instance of CreateSnapshotRequest
	* @method
	*/
	createSnapshot(createSnapshotRequest){
		const params = this.Utils.cleanObject( createSnapshotRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/snapshots${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSnapshotRequest.headers )
		}, JSON.stringify(createSnapshotRequest.body));
	}


	/**
	* Deletes the specified snapshot.
	* @param {DeleteSnapshotRequest} deleteSnapshotRequest An instance of DeleteSnapshotRequest
	* @method
	*/
	deleteSnapshot(deleteSnapshotRequest){
		const params = this.Utils.cleanObject( deleteSnapshotRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/snapshots/${deleteSnapshotRequest.pathParams.snapshotId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSnapshotRequest.headers )
		}, JSON.stringify(deleteSnapshotRequest.body));
	}


	/**
	* Gets the specified snapshot's information.
	* @param {GetSnapshotRequest} getSnapshotRequest An instance of GetSnapshotRequest
	* @method
	*/
	getSnapshot(getSnapshotRequest){
		const params = this.Utils.cleanObject( getSnapshotRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/snapshots/${getSnapshotRequest.pathParams.snapshotId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSnapshotRequest.headers )
		}, JSON.stringify(getSnapshotRequest.body));
	}


	/**
	* Updates the specified snapshot's information.
	* @param {UpdateSnapshotRequest} updateSnapshotRequest An instance of UpdateSnapshotRequest
	* @method
	*/
	updateSnapshot(updateSnapshotRequest){
		const params = this.Utils.cleanObject( updateSnapshotRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/snapshots/${updateSnapshotRequest.pathParams.snapshotId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSnapshotRequest.headers )
		}, JSON.stringify(updateSnapshotRequest.body));
	}


	/**
	* Lists snapshots of the specified file system.
	* @param {ListSnapshotsRequest} listSnapshotsRequest An instance of ListSnapshotsRequest
	* @method
	*/
	listSnapshots(listSnapshotsRequest){
		const params = this.Utils.cleanObject( listSnapshotsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20171215/snapshots${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSnapshotsRequest.headers )
		}, JSON.stringify(listSnapshotsRequest.body));
	}


}
module.exports = FileStorageClient;