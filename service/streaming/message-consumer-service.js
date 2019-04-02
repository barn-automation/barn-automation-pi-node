const ArduinoMessage = require('../../model/arduino-message.js');
const ConfigFileAuthProvider = require('oci-node-sdk/src/codes/recursive/auth/ConfigFileAuthProvider.js');
const StreamingClient = require('oci-node-sdk/src/codes/recursive/client/StreamingClient.js');
const CreateGroupCursorRequest = require('oci-node-sdk/src/codes/recursive/model/streaming/CreateGroupCursorRequest.js');
const CreateGroupCursorDetails = require('oci-node-sdk/src/codes/recursive/model/streaming/CreateGroupCursorDetails.js');
const GetMessagesRequest = require('oci-node-sdk/src/codes/recursive/model/streaming/GetMessagesRequest.js');
const configAuthProvider = new ConfigFileAuthProvider(process.env.OCI_CONFIG_PATH || '~/.oci/config');

module.exports = class MessageConsumer {

    constructor(streamId, cameraService, arduinoService) {
        this.streamId = streamId;
        this.arduinoService = arduinoService;
        this.cameraService = cameraService;
        this.client = new StreamingClient(configAuthProvider, 'us-phoenix-1');
    }

    start() {
        const createGroupCursorDetails = new CreateGroupCursorDetails('TRIM_HORIZON', 'group-0', null, null, null, true);
        const createGroupCursorRequest = new CreateGroupCursorRequest(this.streamId, createGroupCursorDetails);
        console.log(`Consuming stream ${this.streamId}`)
        this.client.createGroupCursor(createGroupCursorRequest)
            .then((cursorResult) => {
                const getMessagesRequest = new GetMessagesRequest(this.streamId, cursorResult.body.value);
                setInterval(() => {
                    this.client.getMessages(getMessagesRequest)
                        .then((getMessageResult) => {
                            if( getMessageResult.body.length ) {
                                getMessageResult.body.forEach((el, i) => {
                                    let msg = Buffer.from(el.value, 'base64').toString('binary');
                                    try {
                                        msg = JSON.parse(msg);
                                        console.log(`[INFO] Received: `, msg);
                                        let arduinoMessage = new ArduinoMessage(msg.type, msg.message);
                                        this.arduinoService.send(arduinoMessage);
                                        switch (msg.type) {
                                            case ArduinoMessage.CAMERA_0:
                                                this.cameraService.snapStoreBroadcast()
                                                break;
                                        }
                                    }
                                    catch(ex) {
                                        console.error(ex);
                                    }
                                });
                            }
                            else {
                                //console.log(new Date().getTime(), '<--- no messages');
                            }
                            getMessagesRequest.cursor = getMessageResult.headers['opc-next-cursor'];
                        })
                        .catch((err) => console.log(err));
                }, 500);
            })
            .catch((err) => console.error(err));

    }
};