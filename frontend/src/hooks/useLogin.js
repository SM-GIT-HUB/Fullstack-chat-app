import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import toast from "react-hot-toast"
import axios from "axios"

function useLogin() {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    async function login({username, password})
    {
        const success = handleInputErrors({username, password});

        if (!success) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/auth/login', {username, password});
            const data = response.data;

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

            toast.success("Logged in successfully");
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

    return [loading, login];
}

export default useLogin


function handleInputErrors({username, password})
{
    if (!username || !password)
    {
        toast.error("Please fill all the fields");
        return false;
    }

    if (password.length < 6)
    {
        toast.error("Password must have atleast 6 characters");
        return false;
    }

    return true;
}