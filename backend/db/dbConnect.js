import mongoose from "mongoose"

const dbConnect = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/chat-app");
        console.log("db connection successful");
    }
    catch(err){
        console.log("Error connecting to db", err.message);
    }
}

export default dbConnect