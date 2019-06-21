const ArduinoService = require('./service/arduino/arduino-service.js');
const MessageProducer = require('./service/streaming/message-producer-service.js');
const MessageConsumer = require('./service/streaming/message-consumer-service.js');
const CameraService = require('./service/camera/camera-service.js');
const GpioService = require('./service/gpio/gpio-service.js');
const argv = require('minimist')(process.argv.slice(2));

/* start config */
let config = {};
config.serialPort = "/dev/ttyACM0"
config.gpioEnabled = false;
config.debugArduinoSerial = false;
config.accessToken = null;
config.secretKey = null;
config.storageRegion = "us-phoenix-1";
config.storageTenancy = "toddrsharp";
config.storageUrl = `${config.storageTenancy}.compat.objectstorage.${config.storageRegion}.oraclecloud.com`;
config.storageBucket = "barn-captures";
config.outgoingStreamId = "ocid1.stream.oc1.phx.aaaaaaaad5puzckqz7r6ty72c7dkw7koqbtoo2uh4g53ww5lpvd6gplcpqba";
config.cameraStreamId = "ocid1.stream.oc1.phx.aaaaaaaadql6qpnaoblgfov4wdtw36xx5y6kze5l4mwyqrx46kdjclcw5d2a";
config.incomingStreamId = "ocid1.stream.oc1.phx.aaaaaaaatu2umvjwt7jybgxrjbkdpsjasl7xyrmzcnw62rsw3e6r6rlpakmq";

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
const producer = new MessageProducer(config.outgoingStreamId);
const cameraProducer = new MessageProducer(config.cameraStreamId);
const cameraService = new CameraService(storageConfig, producer, cameraProducer);
const arduinoService = new ArduinoService(config.serialPort, config.debugArduinoSerial, producer);
const consumer = new MessageConsumer(config.incomingStreamId, cameraService, arduinoService);
consumer.start();
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
