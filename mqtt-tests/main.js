var mqtt = require('mqtt')
// O3 internal MQTT broker
var options = {
    host: '192.168.2.8',
    port: 1883,
    protocol: 'mqtt', //dropped the mqtts
    username: 'user',
    password: 'cerberus'
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

// subscribe to temperature event/topic
client.subscribe('events/object/motion');

// publish message change light pattern and number of repeats
// client.publish('commands/object/lightringRepeat', 'Hello');
// client.publish('commands/object/lightringPattern', 'Hello');