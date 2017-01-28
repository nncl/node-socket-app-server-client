/**
 * @description
 * Module responsible for building realtime communication.
 */

'use strict';

const app = require('express')()
    , http = require('http').Server(app)
    , io = require('socket.io')(http)
    , socket = require('socket.io-client')('http://localhost:8080');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.options('*', function (req, res) {
    res.send(200);
});

app.get('/', function (req, res) {
    // Do somehting here, such as save your data into your database, etc
    res.json({success: true, message: 'Message has been sent successfully'});
});

io.on('connect', function (socket) {
    console.log('connect server');

    socket.on('nickname', function (msg) {
        io.emit('nickname', msg);
    });

    socket.on('disconnect', function () {
        console.log('user disconnect');
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});
