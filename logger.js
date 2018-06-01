const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //send http request
        console.log(message);

        this.emit('messagelogged', { id: 1, url: 'http://' });
    }

}


module.exports = Logger;
//module.exports.endPoint = url;