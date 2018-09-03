var mosca = require('mosca');

var server = new mosca.Server({
  port: 1883,
  id: 'mqtt-broker',
  backend: {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt-broker',
    pubsubCollection: 'messages',
    mongo: {},
  },
  http: {
    port: 3023,
  },
  persistence: {
    factory: mosca.persistence.Mongo,
    url: "mongodb://localhost:27017/mqtt-broker",
  }
});

server.on('clientConnected', function(client) {
  console.log('CLIENT CONNECTED', client.id);
});

server.on('published', function(packet, client) {
  if (!packet.topic.startsWith('$SYS')) {
    console.log('Published', packet.payload);
  }
});

server.on('ready', function setup() {
  console.log('Mosca server is up and running');
});
