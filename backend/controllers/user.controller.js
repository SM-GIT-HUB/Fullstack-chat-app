import userModel from "../models/user.model.js"

const getUsersForSidebar = async(req, res) => {
    try {
        const id = req.user._id;

        const allUsers = await userModel.find( { _id: { $ne: id } } ).select("-password");

        res.status(200).json(allUsers);
    }
    catch(err) {
        console.log("error in getUsers function", err.message);
        res.status(500).json( { error: "Internal server error" } );
    }
}


export {getUsersForSidebar}