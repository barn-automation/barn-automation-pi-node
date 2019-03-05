const Kafka = require('node-rdkafka');

module.exports = class MessageProducer {

    constructor(topic, server) {
        this.topic = topic;
        this.server = server;

        this.producer = new Kafka.Producer({
            'metadata.broker.list': this.server,
            'retry.backoff.ms': 200,
            'message.send.max.retries': 10,
            'socket.keepalive.enable': true,
            'queue.buffering.max.messages': 100000,
            'queue.buffering.max.ms': 1000,
            'batch.num.messages': 1000000,
            'dr_cb': true
        });

        this.producer.connect();
    }

    send(msg) {
        //console.log(`Sending ${msg}...`)
        this.producer.produce(
            this.topic,
            null,
            Buffer.from(JSON.stringify(msg)),
            new Date().getTime(),
            Date.now()
        )
    }

    close() {
        this.producer.close();
    }

};