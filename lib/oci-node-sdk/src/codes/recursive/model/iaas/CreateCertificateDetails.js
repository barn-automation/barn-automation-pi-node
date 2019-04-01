/**
* The configuration details for adding a certificate bundle to a listener. For more information on SSL certficate configuration, see Managing SSL Certificates.
* @param {string} certificateName Minimum: 1 Maximum: 255 A friendly name for the certificate bundle. It must be unique and it cannot be changed. Valid certificate bundle names include only alphanumeric characters, dashes, and underscores. Certificate bundle names cannot contain spaces. Avoid entering confidential information. Example: example_certificate_bundle
* @param {string} [passphrase] A passphrase for encrypted private keys. This is needed only if you created your certificate with a passphrase.
* @param {string} [privateKey] The SSL private key for your certificate, in PEM format. Example: -----BEGIN RSA PRIVATE KEY-----
jO1O1v2ftXMsawM90tnXwc6xhOAT1gDBC9S8DKeca..JZNUgYYwNS0dP2UK
tmyN+XqVcAKw4HqVmChXy5b5msu8eIq3uc2NqNVtR..2ksSLukP8pxXcHyb
+sEwvM4uf8qbnHAqwnOnP9+KV9vds6BaH1eRA4CHz..n+NVZlzBsTxTlS16
/Umr7wJzVrMqK5sDiSu4WuaaBdqMGfL5hLsTjcBFD..Da2iyQmSKuVD4lIZ
...
-----END RSA PRIVATE KEY-----
* @param {string} [publicCertificate] The public certificate, in PEM format, that you received from your SSL certificate provider. Example: -----BEGIN CERTIFICATE-----
MIIC2jCCAkMCAg38MA0GCSqGSIb3DQEBBQUAMIGbM..QswCQYDVQQGEwJKU
A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxE..TAPBgNVBAoTCEZyY
MRgwFgYDVQQLEw9XZWJDZXJ0IFN1cHBvcnQxGDAWB..gNVBAMTD0ZyYW5rN
YiBDQTEjMCEGCSqGSIb3DQEJARYUc3VwcG9ydEBmc..mFuazRkZC5jb20wH
...
-----END CERTIFICATE-----
* @param {string} [caCertificate] The Certificate Authority certificate, or any interim certificate, that you received from your SSL certificate provider. Example: -----BEGIN CERTIFICATE-----
MIIEczCCA1ugAwIBAgIBADANBgkqhkiG9w0BAQQFAD..AkGA1UEBhMCR0Ix
EzARBgNVBAgTClNvbWUtU3RhdGUxFDASBgNVBAoTC0..0EgTHRkMTcwNQYD
VQQLEy5DbGFzcyAxIFB1YmxpYyBQcmltYXJ5IENlcn..XRpb24gQXV0aG9y
aXR5MRQwEgYDVQQDEwtCZXN0IENBIEx0ZDAeFw0wMD..TUwMTZaFw0wMTAy
...
-----END CERTIFICATE-----
* @class CreateCertificateDetails
*/
class CreateCertificateDetails {
	constructor(certificateName, passphrase, privateKey, publicCertificate, caCertificate){
		this.certificateName = certificateName;
		this.passphrase = passphrase;
		this.privateKey = privateKey;
		this.publicCertificate = publicCertificate;
		this.caCertificate = caCertificate;
	}
}

module.exports = CreateCertificateDetails;
