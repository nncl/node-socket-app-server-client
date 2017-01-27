/**
 * @description
 * Module responsible for building realtime communication.
 */

'use strict';

const app = require('express')()
    , http = require('http').Server(app)
    , io = require('socket.io')(http)
    , socket = require('socket.io-client')('http://localhost:8080');

app.get('/', function (req, res) {
    io.emit('nickname', '@caue');
    res.send('cool');
});

io.on('connect', function (socket) {
    console.log('connect server');

    socket.on('nickname', function(msg){
        io.emit('nickname', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnect');
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});