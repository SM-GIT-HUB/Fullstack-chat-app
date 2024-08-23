import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import dbConnect from "./db/dbConnect.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


app.get('/', (req, res) => {
    res.send("Hello World!");
})



app.listen(PORT, () => {
    dbConnect();
    console.log(`server running on port: ${PORT}`);
})