import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"]
    }
});


export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}


const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    //io.emit IS USED TO SEND EVENTS TO ALL THE CONNECTED CLIENTS
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    //socket.on IS USED TO LISTEN TO THE EVENTS. CAN BE USED IN BOTH CLIENT AND SERVER SIDE
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);

        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})


export {app, io, server}