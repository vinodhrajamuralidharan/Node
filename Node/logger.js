const EventEmitter = require('events');

class Log extends EventEmitter {
  log() {
    this.emit('messageHandler', {
      name: 'Vinodh',
      age: 32
    });
    console.log('Hello I am from logger!');
  }
}

module.exports = Log;
