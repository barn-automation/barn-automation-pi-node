/**
* Location of the zip file that contains the Terraform configuration.
* @param {string} configSourceType The configuration file type. Allowed values are: ZIP_UPLOAD (See {@link ZipUploadConfigSource})
* @param {string} [workingDirectory] File path to the directory from which Terraform runs. If not specified, we use the root directory.
* @class ConfigSource
*/
class ConfigSource {
	constructor(configSourceType, workingDirectory){
		this.configSourceType = configSourceType;
		this.workingDirectory = workingDirectory;
	}
}

module.exports = ConfigSource;
