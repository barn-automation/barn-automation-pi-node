const ArduinoService = require('./service/arduino/arduino-service.js');
const MessageProducer = require('./service/kafka/message-producer-service.js');
const MessageConsumer = require('./service/kafka/message-consumer-service.js');
const CameraService = require('./service/camera/camera-service.js');
const GpioService = require('./service/gpio/gpio-service.js');
const argv = require('minimist')(process.argv.slice(2));

/* start config */
let config = {};
config.serialPort = "/dev/ttyACM0"
config.gpioEnabled = false;
config.debugArduinoSerial = false;
config.inTopicName = "incoming";
config.outTopicName = "outgoing";
config.kafkaOutgoingBootstrapServer = "129.146.79.59:6667";
config.kafkaIncomingBootstrapServer = "129.146.79.59:6667";
config.accessToken = null;
config.secretKey = null;
config.storageRegion = "us-phoenix-1";
config.storageTenancy = "toddrsharp";
config.storageUrl = `${config.storageTenancy}.compat.objectstorage.${config.storageRegion}.oraclecloud.com`;
config.storageBucket = "barn-captures";

config = Object.assign(config, argv);

const storageConfig = {
    accessToken: config.accessToken,
    secretKey: config.secretKey,
    storageRegion: config.storageRegion,
    storageTenancy: config.storageTenancy,
    storageUrl: config.storageUrl,
    storageBucket: config.storageBucket,
};

if( !config.accessToken || !config.secretKey ) {
    throw new Error("You must set 'accessToken' and 'secretKey' by passing them as args to this script!")
}

/* end config */

/* start app */
const producer = new MessageProducer(config.outTopicName, config.kafkaOutgoingBootstrapServer);
const arduinoService = new ArduinoService(config.serialPort, config.debugArduinoSerial, producer);
const consumer = new MessageConsumer(config.inTopicName, config.kafkaIncomingBootstrapServer, arduinoService);
consumer.start();
const cameraService = new CameraService(storageConfig, producer);
const gpioService = new GpioService(config.gpioEnabled, cameraService);
gpioService.listen();

console.log(`
                             +&-
                           _.-^-._    .--.
                        .-'   _   '-. |__|
                       /     |_|     \\|  |
                      /               \\  |
                     /|     _____     |\\ |
                      |    |==|==|    |  |
  |---|---|---|---|---|    |--|--|    |  |
  |---|---|---|---|---|    |==|==|    |  |
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`)

process.stdin.resume();
