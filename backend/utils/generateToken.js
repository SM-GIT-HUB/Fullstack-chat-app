import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {
    const token = jwt.sign({id: userId}, process.env.JWT_SECRET, { expiresIn: '20d' });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent js to access the cookie
        sameSite: "strict", // attack prevention
        secure: process.env.NODE_ENV != "development"
    })
}


export default generateToken