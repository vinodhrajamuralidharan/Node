const Logger = require('./logger');

const loggerObject = new Logger();

loggerObject.on('messageHandler', (args) => {
  console.log('Event has been captured!' + args.name + args.age);
});

loggerObject.log();
