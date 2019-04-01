/**
* Details for creating the export.
* @param {string} exportSetId Minimum: 1 Maximum: 255 The OCID of this export's export set.
* @param {string} fileSystemId Minimum: 1 Maximum: 255 The OCID of this export's file system.
* @param {string} path Minimum: 1 Maximum: 1024 Path used to access the associated file system. Avoid entering confidential information. Example: /mediafiles
* @param {Array<ClientOptions>} [exportOptions] Export options for the new export. If left unspecified, defaults to:    [
     {
        "source" : "0.0.0.0/0",
        "requirePrivilegedSourcePort" : false,
        "access" : "READ_WRITE",
        "identitySquash" : "NONE"
      }
   ]
 Note: Mount targets do not have Internet-routable IP addresses. Therefore they will not be reachable from the Internet, even if an associated ClientOptions item has a source of 0.0.0.0/0. If set to the empty array then the export will not be visible to any clients. The export's exportOptions can be changed after creation using the UpdateExport operation.
* @class CreateExportDetails
*/
class CreateExportDetails {
	constructor(exportSetId, fileSystemId, path, exportOptions){
		this.exportSetId = exportSetId;
		this.fileSystemId = fileSystemId;
		this.path = path;
		this.exportOptions = exportOptions;
	}
}

module.exports = CreateExportDetails;
