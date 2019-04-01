const AbstractAuthProvider = require('./AbstractAuthProvider.js');
const ini = require('ini');
const os = require('os');
const fs = require('fs');
/**
 * Provide authentication via an OCI CLI config file
 * @param {string} configFilePath the path to your OCI CLI config file (usually ~/.oci/config)
 * @param {string} [profile=DEFAULT] the profile to use
 * @class ConfigFileAuthProvider
 * @extends AbstractAuthProvider
 */
class ConfigFileAuthProvider extends AbstractAuthProvider {
    constructor(configFilePath, profile="DEFAULT") {
        super();
        if( configFilePath.indexOf("~/") === 0 ) {
            configFilePath = configFilePath.replace("~", os.homedir())
        }
        const config = ini.parse( fs.readFileSync(configFilePath, 'utf-8') );

        this.tenancyId = config[profile].tenancy;
        this.userId = config[profile].user;
        this.keyFingerprint = config[profile].fingerprint;
        this.privateKeyPath = config[profile].key_file;
        this.privateKeyPassphrase = config[profile].pass_phrase;
    }
}

module.exports = ConfigFileAuthProvider;
