module.exports = class ArduinoMessage {

    static get MOTOR_O() { return 0 };
    static get MOTOR_1() { return 1 };
    static get DOOR_0() { return 10 };
    static get DOOR_1() { return 11 };
    static get RELAY_0() { return 20 };
    static get WATER_0() { return 30 };
    static get CAMERA_0() { return 40 };
    static get DOOR_LED_0() { return 50 };
    static get DOOR_LED_1() { return 51 };
    static get OPEN() { return 100 };
    static get CLOSE() { return 101 };
    static get ON() { return 200 };
    static get OFF() { return 201 };


    constructor(type, message) {
        this.type = type
        this.message = message
    }

}