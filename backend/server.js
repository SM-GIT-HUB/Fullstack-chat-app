import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import dbConnect from "./db/dbConnect.js"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


app.get('/api/check', (req, res) => {
    res.status(201).json({success: true, message: "Hello World"});
})



server.listen(PORT, () => {
    dbConnect();
    console.log(`server running on port: ${PORT}`);
})