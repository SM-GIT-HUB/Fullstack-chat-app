import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
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
})

const userModel = mongoose.model("User", userSchema);

export default userModel