var mqtt = require('mqtt')
// O3 internal MQTT broker
var options = {
    host: '192.168.2.8',
    port: 1883,
    protocol: 'mqtt', 
    protocolversion: 3, // Version needs to be defined
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

// publish message to start light pattern
client.publish('commands/object/lightringPattern', '10');
