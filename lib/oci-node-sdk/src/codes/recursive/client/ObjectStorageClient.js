const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Object Storage Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class ObjectStorageClient
 * @extends AbstractApiClient
 */
class ObjectStorageClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://objectstorage.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates a bucket in the given namespace with a bucket name and optional user-defined metadata. Avoid entering confidential information in bucket names.
	* @param {CreateBucketRequest} createBucketRequest An instance of CreateBucketRequest
	* @method
	*/
	createBucket(createBucketRequest){
		const params = this.Utils.cleanObject( createBucketRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${createBucketRequest.pathParams.namespaceName}/b/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBucketRequest.headers )
		}, JSON.stringify(createBucketRequest.body));
	}


	/**
	* Deletes a bucket if the bucket is already empty. If the bucket is not empty, use DeleteObject first. You also cannot delete a bucket that has a pre-authenticated request associated with that bucket.
	* @param {DeleteBucketRequest} deleteBucketRequest An instance of DeleteBucketRequest
	* @method
	*/
	deleteBucket(deleteBucketRequest){
		const params = this.Utils.cleanObject( deleteBucketRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${deleteBucketRequest.pathParams.namespaceName}/b/${deleteBucketRequest.pathParams.bucketName}/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBucketRequest.headers )
		}, JSON.stringify(deleteBucketRequest.body));
	}


	/**
	* Gets the current representation of the given bucket in the given Object Storage namespace.
	* @param {GetBucketRequest} getBucketRequest An instance of GetBucketRequest
	* @method
	*/
	getBucket(getBucketRequest){
		const params = this.Utils.cleanObject( getBucketRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${getBucketRequest.pathParams.namespaceName}/b/${getBucketRequest.pathParams.bucketName}/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBucketRequest.headers )
		}, JSON.stringify(getBucketRequest.body));
	}


	/**
	* Efficiently checks to see if a bucket exists and gets the current entity tag (ETag) for the bucket.
	* @param {HeadBucketRequest} headBucketRequest An instance of HeadBucketRequest
	* @method
	*/
	headBucket(headBucketRequest){
		const params = this.Utils.cleanObject( headBucketRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${headBucketRequest.pathParams.namespaceName}/b/${headBucketRequest.pathParams.bucketName}/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'HEAD', {
			headers: this.Utils.cleanObject( headBucketRequest.headers )
		}, JSON.stringify(headBucketRequest.body));
	}


	/**
	* Gets a list of all BucketSummary items in a compartment. A BucketSummary contains only summary fields for the bucket and does not contain fields like the user-defined metadata.
	* @param {ListBucketsRequest} listBucketsRequest An instance of ListBucketsRequest
	* @method
	*/
	listBuckets(listBucketsRequest){
		const params = this.Utils.cleanObject( listBucketsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${listBucketsRequest.pathParams.namespaceName}/b/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBucketsRequest.headers )
		}, JSON.stringify(listBucketsRequest.body));
	}


	/**
	* Performs a partial or full update of a bucket's user-defined metadata.
	* @param {UpdateBucketRequest} updateBucketRequest An instance of UpdateBucketRequest
	* @method
	*/
	updateBucket(updateBucketRequest){
		const params = this.Utils.cleanObject( updateBucketRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${updateBucketRequest.pathParams.namespaceName}/b/${updateBucketRequest.pathParams.bucketName}/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( updateBucketRequest.headers )
		}, JSON.stringify(updateBucketRequest.body));
	}


	/**
	* Each Oracle Cloud Infrastructure tenant is assigned one unique and uneditable Object Storage namespace. The namespace is a system-generated string assigned during account creation. For some older tenancies, the namespace string may be the tenancy name in all lower-case letters. You cannot edit a namespace.
	* @param {GetNamespaceRequest} getNamespaceRequest An instance of GetNamespaceRequest
	* @method
	*/
	getNamespace(getNamespaceRequest){
		const params = this.Utils.cleanObject( getNamespaceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getNamespaceRequest.headers )
		}, JSON.stringify(getNamespaceRequest.body));
	}


	/**
	* Gets the metadata for the Object Storage namespace, which contains defaultS3CompartmentId and defaultSwiftCompartmentId.
	* @param {GetNamespaceMetadataRequest} getNamespaceMetadataRequest An instance of GetNamespaceMetadataRequest
	* @method
	*/
	getNamespaceMetadata(getNamespaceMetadataRequest){
		const params = this.Utils.cleanObject( getNamespaceMetadataRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${getNamespaceMetadataRequest.pathParams.namespaceName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getNamespaceMetadataRequest.headers )
		}, JSON.stringify(getNamespaceMetadataRequest.body));
	}


	/**
	* By default, buckets created using the Amazon S3 Compatibility API or the Swift API are created in the root compartment of the Oracle Cloud Infrastructure tenancy.
	* @param {UpdateNamespaceMetadataRequest} updateNamespaceMetadataRequest An instance of UpdateNamespaceMetadataRequest
	* @method
	*/
	updateNamespaceMetadata(updateNamespaceMetadataRequest){
		const params = this.Utils.cleanObject( updateNamespaceMetadataRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${updateNamespaceMetadataRequest.pathParams.namespaceName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateNamespaceMetadataRequest.headers )
		}, JSON.stringify(updateNamespaceMetadataRequest.body));
	}


	/**
	* Aborts an in-progress multipart upload and deletes all parts that have been uploaded.
	* @param {AbortMultipartUploadRequest} abortMultipartUploadRequest An instance of AbortMultipartUploadRequest
	* @method
	*/
	abortMultipartUpload(abortMultipartUploadRequest){
		const params = this.Utils.cleanObject( abortMultipartUploadRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${abortMultipartUploadRequest.pathParams.namespaceName}/b/${abortMultipartUploadRequest.pathParams.bucketName}/u/${abortMultipartUploadRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( abortMultipartUploadRequest.headers )
		}, JSON.stringify(abortMultipartUploadRequest.body));
	}


	/**
	* Commits a multipart upload, which involves checking part numbers and entity tags (ETags) of the parts, to create an aggregate object.
	* @param {CommitMultipartUploadRequest} commitMultipartUploadRequest An instance of CommitMultipartUploadRequest
	* @method
	*/
	commitMultipartUpload(commitMultipartUploadRequest){
		const params = this.Utils.cleanObject( commitMultipartUploadRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${commitMultipartUploadRequest.pathParams.namespaceName}/b/${commitMultipartUploadRequest.pathParams.bucketName}/u/${commitMultipartUploadRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( commitMultipartUploadRequest.headers )
		}, JSON.stringify(commitMultipartUploadRequest.body));
	}


	/**
	* Creates a request to copy an object within a region or to another region.
	* @param {CopyObjectRequest} copyObjectRequest An instance of CopyObjectRequest
	* @method
	*/
	copyObject(copyObjectRequest){
		const params = this.Utils.cleanObject( copyObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${copyObjectRequest.pathParams.namespaceName}/b/${copyObjectRequest.pathParams.bucketName}/actions/copyObject${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( copyObjectRequest.headers )
		}, JSON.stringify(copyObjectRequest.body));
	}


	/**
	* Starts a new multipart upload to a specific object in the given bucket in the given namespace.
	* @param {CreateMultipartUploadRequest} createMultipartUploadRequest An instance of CreateMultipartUploadRequest
	* @method
	*/
	createMultipartUpload(createMultipartUploadRequest){
		const params = this.Utils.cleanObject( createMultipartUploadRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${createMultipartUploadRequest.pathParams.namespaceName}/b/${createMultipartUploadRequest.pathParams.bucketName}/u${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createMultipartUploadRequest.headers )
		}, JSON.stringify(createMultipartUploadRequest.body));
	}


	/**
	* Deletes an object.
	* @param {DeleteObjectRequest} deleteObjectRequest An instance of DeleteObjectRequest
	* @method
	*/
	deleteObject(deleteObjectRequest){
		const params = this.Utils.cleanObject( deleteObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${deleteObjectRequest.pathParams.namespaceName}/b/${deleteObjectRequest.pathParams.bucketName}/o/${deleteObjectRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteObjectRequest.headers )
		}, JSON.stringify(deleteObjectRequest.body));
	}


	/**
	* Gets the metadata and body of an object.
	* @param {GetObjectRequest} getObjectRequest An instance of GetObjectRequest
	* @method
	*/
	getObject(getObjectRequest){
		const params = this.Utils.cleanObject( getObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${getObjectRequest.pathParams.namespaceName}/b/${getObjectRequest.pathParams.bucketName}/o/${getObjectRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getObjectRequest.headers )
		}, JSON.stringify(getObjectRequest.body));
	}


	/**
	* Gets the user-defined metadata and entity tag (ETag) for an object.
	* @param {HeadObjectRequest} headObjectRequest An instance of HeadObjectRequest
	* @method
	*/
	headObject(headObjectRequest){
		const params = this.Utils.cleanObject( headObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${headObjectRequest.pathParams.namespaceName}/b/${headObjectRequest.pathParams.bucketName}/o/${headObjectRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'HEAD', {
			headers: this.Utils.cleanObject( headObjectRequest.headers )
		}, JSON.stringify(headObjectRequest.body));
	}


	/**
	* Lists the parts of an in-progress multipart upload.
	* @param {ListMultipartUploadPartsRequest} listMultipartUploadPartsRequest An instance of ListMultipartUploadPartsRequest
	* @method
	*/
	listMultipartUploadParts(listMultipartUploadPartsRequest){
		const params = this.Utils.cleanObject( listMultipartUploadPartsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${listMultipartUploadPartsRequest.pathParams.namespaceName}/b/${listMultipartUploadPartsRequest.pathParams.bucketName}/u/${listMultipartUploadPartsRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listMultipartUploadPartsRequest.headers )
		}, JSON.stringify(listMultipartUploadPartsRequest.body));
	}


	/**
	* Lists all of the in-progress multipart uploads for the given bucket in the given Object Storage namespace.
	* @param {ListMultipartUploadsRequest} listMultipartUploadsRequest An instance of ListMultipartUploadsRequest
	* @method
	*/
	listMultipartUploads(listMultipartUploadsRequest){
		const params = this.Utils.cleanObject( listMultipartUploadsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${listMultipartUploadsRequest.pathParams.namespaceName}/b/${listMultipartUploadsRequest.pathParams.bucketName}/u${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listMultipartUploadsRequest.headers )
		}, JSON.stringify(listMultipartUploadsRequest.body));
	}


	/**
	* Lists the objects in a bucket.
	* @param {ListObjectsRequest} listObjectsRequest An instance of ListObjectsRequest
	* @method
	*/
	listObjects(listObjectsRequest){
		const params = this.Utils.cleanObject( listObjectsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${listObjectsRequest.pathParams.namespaceName}/b/${listObjectsRequest.pathParams.bucketName}/o${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listObjectsRequest.headers )
		}, JSON.stringify(listObjectsRequest.body));
	}


	/**
	* Creates a new object or overwrites an existing one. See Special Instructions for Object Storage PUT for request signature requirements.
	* @param {PutObjectRequest} putObjectRequest An instance of PutObjectRequest
	* @method
	*/
	putObject(putObjectRequest){
		const params = this.Utils.cleanObject( putObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${putObjectRequest.pathParams.namespaceName}/b/${putObjectRequest.pathParams.bucketName}/o/${putObjectRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( putObjectRequest.headers )
		}, putObjectRequest.body);
	}


	/**
	* Rename an object in the given Object Storage namespace.
	* @param {RenameObjectRequest} renameObjectRequest An instance of RenameObjectRequest
	* @method
	*/
	renameObject(renameObjectRequest){
		const params = this.Utils.cleanObject( renameObjectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${renameObjectRequest.pathParams.namespaceName}/b/${renameObjectRequest.pathParams.bucketName}/actions/renameObject${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( renameObjectRequest.headers )
		}, JSON.stringify(renameObjectRequest.body));
	}


	/**
	* Restores one or more objects specified by the objectName parameter. By default objects will be restored for 24 hours. Duration can be configured using the hours parameter.
	* @param {RestoreObjectsRequest} restoreObjectsRequest An instance of RestoreObjectsRequest
	* @method
	*/
	restoreObjects(restoreObjectsRequest){
		const params = this.Utils.cleanObject( restoreObjectsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${restoreObjectsRequest.pathParams.namespaceName}/b/${restoreObjectsRequest.pathParams.bucketName}/actions/restoreObjects${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( restoreObjectsRequest.headers )
		}, JSON.stringify(restoreObjectsRequest.body));
	}


	/**
	* Uploads a single part of a multipart upload.
	* @param {UploadPartRequest} uploadPartRequest An instance of UploadPartRequest
	* @method
	*/
	uploadPart(uploadPartRequest){
		const params = this.Utils.cleanObject( uploadPartRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${uploadPartRequest.pathParams.namespaceName}/b/${uploadPartRequest.pathParams.bucketName}/u/${uploadPartRequest.pathParams.objectName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( uploadPartRequest.headers )
		}, uploadPartRequest.body);
	}


	/**
	* Deletes the object lifecycle policy for the bucket.
	* @param {DeleteObjectLifecyclePolicyRequest} deleteObjectLifecyclePolicyRequest An instance of DeleteObjectLifecyclePolicyRequest
	* @method
	*/
	deleteObjectLifecyclePolicy(deleteObjectLifecyclePolicyRequest){
		const params = this.Utils.cleanObject( deleteObjectLifecyclePolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${deleteObjectLifecyclePolicyRequest.pathParams.namespaceName}/b/${deleteObjectLifecyclePolicyRequest.pathParams.bucketName}/l${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteObjectLifecyclePolicyRequest.headers )
		}, JSON.stringify(deleteObjectLifecyclePolicyRequest.body));
	}


	/**
	* Gets the object lifecycle policy for the bucket.
	* @param {GetObjectLifecyclePolicyRequest} getObjectLifecyclePolicyRequest An instance of GetObjectLifecyclePolicyRequest
	* @method
	*/
	getObjectLifecyclePolicy(getObjectLifecyclePolicyRequest){
		const params = this.Utils.cleanObject( getObjectLifecyclePolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${getObjectLifecyclePolicyRequest.pathParams.namespaceName}/b/${getObjectLifecyclePolicyRequest.pathParams.bucketName}/l${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getObjectLifecyclePolicyRequest.headers )
		}, JSON.stringify(getObjectLifecyclePolicyRequest.body));
	}


	/**
	* Creates or replaces the object lifecycle policy for the bucket.
	* @param {PutObjectLifecyclePolicyRequest} putObjectLifecyclePolicyRequest An instance of PutObjectLifecyclePolicyRequest
	* @method
	*/
	putObjectLifecyclePolicy(putObjectLifecyclePolicyRequest){
		const params = this.Utils.cleanObject( putObjectLifecyclePolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${putObjectLifecyclePolicyRequest.pathParams.namespaceName}/b/${putObjectLifecyclePolicyRequest.pathParams.bucketName}/l${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( putObjectLifecyclePolicyRequest.headers )
		}, JSON.stringify(putObjectLifecyclePolicyRequest.body));
	}


	/**
	* Creates a pre-authenticated request specific to the bucket.
	* @param {CreatePreauthenticatedRequestRequest} createPreauthenticatedRequestRequest An instance of CreatePreauthenticatedRequestRequest
	* @method
	*/
	createPreauthenticatedRequest(createPreauthenticatedRequestRequest){
		const params = this.Utils.cleanObject( createPreauthenticatedRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${createPreauthenticatedRequestRequest.pathParams.namespaceName}/b/${createPreauthenticatedRequestRequest.pathParams.bucketName}/p/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPreauthenticatedRequestRequest.headers )
		}, JSON.stringify(createPreauthenticatedRequestRequest.body));
	}


	/**
	* Deletes the pre-authenticated request for the bucket.
	* @param {DeletePreauthenticatedRequestRequest} deletePreauthenticatedRequestRequest An instance of DeletePreauthenticatedRequestRequest
	* @method
	*/
	deletePreauthenticatedRequest(deletePreauthenticatedRequestRequest){
		const params = this.Utils.cleanObject( deletePreauthenticatedRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${deletePreauthenticatedRequestRequest.pathParams.namespaceName}/b/${deletePreauthenticatedRequestRequest.pathParams.bucketName}/p/${deletePreauthenticatedRequestRequest.pathParams.parId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePreauthenticatedRequestRequest.headers )
		}, JSON.stringify(deletePreauthenticatedRequestRequest.body));
	}


	/**
	* Gets the pre-authenticated request for the bucket.
	* @param {GetPreauthenticatedRequestRequest} getPreauthenticatedRequestRequest An instance of GetPreauthenticatedRequestRequest
	* @method
	*/
	getPreauthenticatedRequest(getPreauthenticatedRequestRequest){
		const params = this.Utils.cleanObject( getPreauthenticatedRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${getPreauthenticatedRequestRequest.pathParams.namespaceName}/b/${getPreauthenticatedRequestRequest.pathParams.bucketName}/p/${getPreauthenticatedRequestRequest.pathParams.parId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPreauthenticatedRequestRequest.headers )
		}, JSON.stringify(getPreauthenticatedRequestRequest.body));
	}


	/**
	* Lists pre-authenticated requests for the bucket.
	* @param {ListPreauthenticatedRequestsRequest} listPreauthenticatedRequestsRequest An instance of ListPreauthenticatedRequestsRequest
	* @method
	*/
	listPreauthenticatedRequests(listPreauthenticatedRequestsRequest){
		const params = this.Utils.cleanObject( listPreauthenticatedRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/n/${listPreauthenticatedRequestsRequest.pathParams.namespaceName}/b/${listPreauthenticatedRequestsRequest.pathParams.bucketName}/p/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPreauthenticatedRequestsRequest.headers )
		}, JSON.stringify(listPreauthenticatedRequestsRequest.body));
	}


	/**
	* Cancels a work request.
	* @param {CancelWorkRequestRequest} cancelWorkRequestRequest An instance of CancelWorkRequestRequest
	* @method
	*/
	cancelWorkRequest(cancelWorkRequestRequest){
		const params = this.Utils.cleanObject( cancelWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/workRequests/${cancelWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( cancelWorkRequestRequest.headers )
		}, JSON.stringify(cancelWorkRequestRequest.body));
	}


	/**
	* Gets the status of the work request for the given ID.
	* @param {GetWorkRequestRequest} getWorkRequestRequest An instance of GetWorkRequestRequest
	* @method
	*/
	getWorkRequest(getWorkRequestRequest){
		const params = this.Utils.cleanObject( getWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/workRequests/${getWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWorkRequestRequest.headers )
		}, JSON.stringify(getWorkRequestRequest.body));
	}


	/**
	* Lists the work requests in a compartment.
	* @param {ListWorkRequestsRequest} listWorkRequestsRequest An instance of ListWorkRequestsRequest
	* @method
	*/
	listWorkRequests(listWorkRequestsRequest){
		const params = this.Utils.cleanObject( listWorkRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/workRequests${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestsRequest.headers )
		}, JSON.stringify(listWorkRequestsRequest.body));
	}


	/**
	* Lists the errors of the work request with the given ID.
	* @param {ListWorkRequestErrorsRequest} listWorkRequestErrorsRequest An instance of ListWorkRequestErrorsRequest
	* @method
	*/
	listWorkRequestErrors(listWorkRequestErrorsRequest){
		const params = this.Utils.cleanObject( listWorkRequestErrorsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/workRequests/${listWorkRequestErrorsRequest.pathParams.workRequestId}/errors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestErrorsRequest.headers )
		}, JSON.stringify(listWorkRequestErrorsRequest.body));
	}


	/**
	* Lists the logs of the work request with the given ID.
	* @param {ListWorkRequestLogsRequest} listWorkRequestLogsRequest An instance of ListWorkRequestLogsRequest
	* @method
	*/
	listWorkRequestLogs(listWorkRequestLogsRequest){
		const params = this.Utils.cleanObject( listWorkRequestLogsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/workRequests/${listWorkRequestLogsRequest.pathParams.workRequestId}/logs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestLogsRequest.headers )
		}, JSON.stringify(listWorkRequestLogsRequest.body));
	}


}
module.exports = ObjectStorageClient;