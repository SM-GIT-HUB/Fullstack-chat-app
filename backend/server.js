import express from "express"
import "dotenv/config"

import authRoutes from "./routes/auth.routes.js"
import dbConnect from "./db/dbConnect.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send("Hello World!");
})



app.listen(PORT, () => {
    dbConnect();
    console.log(`server running on port: ${PORT}`);
})