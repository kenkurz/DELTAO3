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

// subscribe to various events (case sensitive)
client.subscribe('events/object/motion');
client.subscribe('events/object/occupantTemperature');
client.subscribe('events/object/occupantHumidity');
client.subscribe('events/object/lightLevel');
client.subscribe('events/object/soundLevel');
client.subscribe('events/object/acousticOccupancy');

// publish message to trigger various actions - data is JSON formatted
client.publish('commands/object/lightringRepeat', JSON.stringify({"data": 5}));
client.publish('commands/object/lightringPattern', JSON.stringify({"data": 12}));
client.publish('commands/object/volume', JSON.stringify({"data": 100}));
client.publish('commands/object/soundRepeat', JSON.stringify({"data": 10}));
client.publish('commands/object/soundfile', JSON.stringify({"data": "(1) Power On.wav"}));