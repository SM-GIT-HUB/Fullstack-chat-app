import path from "path"
import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import dbConnect from "./db/dbConnect.js"
import { app, server } from "./socket/socket.js"
import axios from "axios"

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


app.get('/api/check', (req, res) => {
    res.status(201).json({success: true, message: "Hello World!"});
})

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})



server.listen(PORT, () => {
    dbConnect();
    console.log(`server running on port: ${PORT}`);
})


setInterval(() => {
    axios.get(process.env.URL);
}, 600000)