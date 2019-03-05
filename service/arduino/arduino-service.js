const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

module.exports = class ArduinoService {

    constructor(serialPort, debug, producer) {
        this.producer = producer;
        this.debug = debug;
        this.port = new SerialPort(serialPort, {
            baudRate: 9600
        });
        const parser = this.port.pipe(new Readline());

        parser.on('data', (d) => {
            let data = d.toString('utf8');
            let parsed = '';
            try {
                parsed = JSON.parse(data.toString('utf8'))
                if( this.debug ) console.log('Message-->', parsed);
                parsed.messages.forEach( (msg) => {
                    if( this.debug ) console.log(`[INFO] ${new Date().getTime()} Sending--->`, msg);
                    this.producer.send(msg)
                });
            }
            catch (e) {
                console.warn('Could not parse', e);
            }
        });
    }

    send(arduinoMessage) {
        if( this.debug ) console.log(JSON.stringify(arduinoMessage))
        this.port.write(JSON.stringify(arduinoMessage))
    }
}
