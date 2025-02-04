const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: "*"
})

io.on("connection", (socket) => {
    console.log('user connected');

    socket.on("message", (kkk) => {
        console.log(kkk);
        io.emit("msg", kkk);
    })

    socket.on("disconnect", () => {
        console.log('user diconnected');
    })
})


server.listen(3000);