module.exports = class GpioService {

    constructor(enabled, cameraService) {
        this.enabled = enabled;
        this.cameraService = cameraService;
        try {
            this.gpio = require('rpi-gpio');
            this.gpiop = this.gpio.promise;
        }
        catch (e) {
            console.warn('GPIO Disabled...')
        }
    }

    listen() {
        if(this.enabled) {
            console.log('GPIO Enabled, setting up listeners')
            this.gpio.on('change', (channel, value) => {
                switch (channel) {
                    case 8:
                        if( value ) {
                            console.log('Motion detected, taking picture and storing it...')
                            this.cameraService.snapStoreBroadcast()
                        }
                        break;
                }
            });

            this.gpio.setup(8, this.gpio.DIR_IN, this.gpio.EDGE_BOTH, (err) => {
                if (err) throw err;
            });
            console.log('GPIO init...')
        }
        else {
            console.warn('Call to listen() was ignored because GPIO functionality is disabled (are you running on a Pi?)...')
        }
    }

};