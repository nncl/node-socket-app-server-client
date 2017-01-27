/**
 * @description
 * Module responsible for building realtime communication.
 */

'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socket = require('socket.io-client')('http://localhost:8080');

app.get('/', function (req, res) {
    res.send('cool');
});

socket.on('connect', function(){
    console.log('connect');
});
socket.on('nickname', function(data){
    console.log('nickname');
});
socket.on('disconnect', function(){
    console.log('disconnect');
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});