import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum:["male", "female"]
    },
    dp: {
        type: String,
        default: ""
    }
},  { timestamps: true })

const userModel = mongoose.model("User", userSchema);

export default userModel