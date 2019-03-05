const Kafka = require('node-rdkafka');
const ArduinoMessage = require('../../model/arduino-message.js');

module.exports = class MessageConsumer {

    constructor(topic, server, arduinoService) {
        this.topic = topic;
        this.server = server;
        this.arduinoService = arduinoService;

        this.consumer = new Kafka.KafkaConsumer({
            'group.id': 'barn_pi_group',
            'metadata.broker.list': server,
        }, {});
    }

    start() {
        this.consumer.connect();

        this.consumer.on('ready', () => {
            this.consumer.subscribe([this.topic]);
            this.consumer.consume();
        });

        this.consumer.on('data', (data) => {
            let msg = '';
            try {
                msg = JSON.parse(data.value.toString());
                //console.log(`[INFO] Received: `, msg);
                let arduinoMessage = new ArduinoMessage(msg.type, msg.message);
                this.arduinoService.send(arduinoMessage);
            }
            catch (e) {
                console.error('Error parsing msg ->', e);
            }
        });
    }
};