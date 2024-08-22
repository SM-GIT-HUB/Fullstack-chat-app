async function signup(req, res) {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    }
    catch(err){

    }
}


async function login(req, res) {
    res.send("login");
}


async function logout(req, res) {
    res.send("logout");
}




export {signup, login, logout}