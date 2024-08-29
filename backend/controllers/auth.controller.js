import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs/dist/bcrypt.js"
import generateToken from "../utils/generateToken.js";

async function signup(req, res) {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json( { error: "passwords do not match" } );
        }
        
        const user = await userModel.findOne({username});

        if (user) {
            return res.status(400).json( { error: "username already exists" } );
        }

        //HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyDp = `https://avatar.iran.liara.run/public/boy?username=${username}`; //API PROVIDED BY- https://avatar-placeholder.iran.liara.run/document
        const girlDp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await userModel.create({
            fullName,
            username,
            password: hashedPassword,
            gender,
            dp: gender == "male"? boyDp : girlDp
        })

        if (newUser) {
            generateToken(newUser._id, res);
            res.status(201).json( { id: newUser._id, fullName, username, dp: newUser.dp } );
        }
        else
            res.status(400).json( { error: "Invalid user data" } );
    }
    catch(err) {
        console.log("Error in signup", err.message);
        res.status(500).json( { error: "Internal server error" } );
    }
}


async function login(req, res) {
    try {
        const {username, password} = req.body;

        const user = await userModel.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user._id, res);

        res.status(201).json( { id: user._id, fullName: user.fullName, username: user.username, dp: user.dp } );
    }
    catch(err) {
        console.log("Error in login", err.message);
        res.status(500).json( { error: "Internal server error" } );
    }
}


function logout(req, res) {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json( { message: "Logged out successfully" } );
    }
    catch(err) {
        console.log("Error in logout", err.message);
        res.status(500).json( { error: "Internal server error" } );
    }
}



export {signup, login, logout}