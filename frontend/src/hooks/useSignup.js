import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../../context/AuthContext"

function useSignup()
{
    const [loading, setLoading] = useState(false);

    const { setAuthUser} = useAuthContext();

    async function signup({fullName, username, password, confirmPassword, gender})
    {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});

        if (!success) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("/api/auth/signup", {fullName, username, password, confirmPassword, gender});

            const data = response.data;

            console.log(data);
            
            //LOCAL STORAGE
            localStorage.setItem("chat-user", JSON.stringify(data));

            // CONTEXT
            setAuthUser(data);

            toast.success("Signup successful");
        }
        catch(err) {
            if (err.response) {
                toast.error(err.response.data.error);
            }
            else
                toast.error(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    return {loading, signup};
}

export default useSignup


function handleInputErrors({fullName, username, password, confirmPassword, gender})
{
    if (!fullName || !username || !password || !confirmPassword || !gender)
    {
        toast.error("Please fill all the fields");
        return false;
    }

    if (password != confirmPassword)
    {
        toast.error("Passwords don't match");
        return false;
    }

    if (password.length < 6)
    {
        toast.error("Password must have atleast 6 characters");
        return false;
    }

    return true;
}