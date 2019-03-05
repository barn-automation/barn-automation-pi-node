const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const Raspistill = require('node-raspistill').Raspistill;

module.exports = class CameraService{

    constructor(config, messageProducer) {
        this.config = config;
        this.producer = messageProducer;
        this.camera = new Raspistill({
            noFileSave: true,
            horizontalFlip: true,
            verticalFlip: true,
        });
        AWS.config.update({
            region: config.storageRegion,
            credentials: new AWS.Credentials(config.accessToken, config.secretKey),
            s3ForcePathStyle: true,
        });
        AWS.config.s3 = { endpoint: `${config.storageUrl}` };

        this.s3 = new AWS.S3({
            params: {Bucket: config.storageBucket}
        });
    }

    snapStoreBroadcast() {
        const key = uuid();
        this.camera.takePhoto().then((photo) => {
            this.s3.upload({
                Key: key,
                Body: photo,
                ACL: 'public-read',
                ContentType: 'image/jpeg',
            }, (err, data) => {
                if (err) console.error(err);
                try{
                    console.log(`Image saved at ${data.Location}`);
                    this.producer.send({
                        type: "CAMERA_0",
                        data: {
                            takenAt: new Date(),
                            key: data.key
                        }
                    });
                }
                catch (e) {

                }
            });
        });
    }

}