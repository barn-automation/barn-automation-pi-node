const ConfigFileAuthProvider = require('oci-node-sdk/src/codes/recursive/auth/ConfigFileAuthProvider.js');
const StreamingClient = require('oci-node-sdk/src/codes/recursive/client/StreamingClient.js');
const PutMessagesRequest = require('oci-node-sdk/src/codes/recursive/model/streaming/PutMessagesRequest.js');
const PutMessagesDetails = require('oci-node-sdk/src/codes/recursive/model/streaming/PutMessagesDetails.js');
const PutMessagesDetailsEntry = require('oci-node-sdk/src/codes/recursive/model/streaming/PutMessagesDetailsEntry.js');
const configAuthProvider = new ConfigFileAuthProvider(process.env.OCI_CONFIG_PATH || '~/.oci/config');

module.exports = class MessageProducer {

    constructor(streamId) {
        this.streamId = streamId;
        this.client = new StreamingClient(configAuthProvider, 'us-phoenix-1');
    }

    send(msgs) {
        const messages = [];
        msgs.forEach((msg) => {
            messages.push( new PutMessagesDetailsEntry( Buffer.from(JSON.stringify(msg)).toString('base64') ) );
        });
        const putMessagesDetails = new PutMessagesDetails(messages);
        const putMessagesRequest = new PutMessagesRequest(this.streamId, putMessagesDetails);
        this.client.putMessages(putMessagesRequest)
            .then((putMessageResult) => {
                console.log(`[INFO] Publishing new message...`)
                //console.log(putMessageResult)
            })
            .catch((err) => console.error(err));
    }

};