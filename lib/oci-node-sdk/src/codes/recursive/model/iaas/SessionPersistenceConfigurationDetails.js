/**
* The configuration details for implementing session persistence. Session persistence enables the Load Balancing Service to direct any number of requests that originate from a single logical client to a single backend web server. For more information, see Session Persistence.
* @param {string} cookieName Minimum: 1 Maximum: 4096 The name of the cookie used to detect a session initiated by the backend server. Use '*' to specify that any cookie set by the backend causes the session to persist. Example: example_cookie
* @param {boolean} [disableFallback] Whether the load balancer is prevented from directing traffic from a persistent session client to a different backend server if the original server is unavailable. Defaults to false. Example: false
* @class SessionPersistenceConfigurationDetails
*/
class SessionPersistenceConfigurationDetails {
	constructor(cookieName, disableFallback){
		this.cookieName = cookieName;
		this.disableFallback = disableFallback;
	}
}

module.exports = SessionPersistenceConfigurationDetails;
