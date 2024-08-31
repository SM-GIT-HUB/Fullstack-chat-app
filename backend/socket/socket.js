import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["https://lets-chat-fjae.onrender.com"],
        methods: ["GET", "POST"]
    }
});


export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}


const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    //io.emit IS USED TO SEND EVENTS TO ALL THE CONNECTED CLIENTS
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    //socket.on IS USED TO LISTEN TO THE EVENTS. CAN BE USED IN BOTH CLIENT AND SERVER SIDE
    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})


export {app, io, server}