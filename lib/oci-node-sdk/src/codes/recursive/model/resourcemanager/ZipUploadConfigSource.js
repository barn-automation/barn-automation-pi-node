/**
* File path to the location of the zip file that contains the Terraform configuration.
* @param {string} configSourceType The configuration file type. Required value: ZIP_UPLOAD See {@link ConfigSource} for more information.
* @param {string} [workingDirectory] File path to the directory from which Terraform runs. If not specified, we use the root directory.
* @class ZipUploadConfigSource
*/
class ZipUploadConfigSource {
	constructor(configSourceType, workingDirectory){
		this.configSourceType = configSourceType;
		this.workingDirectory = workingDirectory;
	}
}

module.exports = ZipUploadConfigSource;
