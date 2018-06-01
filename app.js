//var msg = 'Hello World';

//const logger = require('./logger.js');
//logger = 1;
//logger.log('harmeet');

//const os = require('os');
//var tm = os.totalmem();
//var fm = os.freemem();

//console.log(`total mem ${tm}`);

//const fs = require('fs');
//const files = fs.readdirSync('./');

//console.log(files);

const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require('./logger.js');
const logger = new Logger();


logger.on('messagelogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');