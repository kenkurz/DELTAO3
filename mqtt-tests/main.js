var mqtt = require('mqtt')
// SImple MQTT client
var options = {
    host: '5d1b27452b1843d9838bb545a295631f.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'kenetics',
    password: 'Charon1975$'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic AXIS camera fence guard event
client.subscribe('AXIS001/event/tns:axis/CameraApplicationPlatform/FenceGuard/Camera1ProfileANY');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('testtopic/1', 'Hello');