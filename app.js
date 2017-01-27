/**
 * @description
 * Module responsible for building realtime communication.
 */

'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});