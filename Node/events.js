const EventEmitter = require('events');

const eventObject = new EventEmitter();

eventObject.on('messageHandler', (args) => {
  console.log('Event has been captured!' + args.name + args.age);
});

eventObject.emit('messageHandler', {
  name: 'Vinodh',
  age: 32
});
