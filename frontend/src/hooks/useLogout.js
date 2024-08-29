/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../../context/AuthContext"

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function logout()
  {
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/logout');
      const data = response.data;

      localStorage.removeItem("chat-user");
      setAuthUser(null);

      toast.success("Logged out successfully");
    }
    catch(err) {
      localStorage.removeItem("chat-user");
      setAuthUser(null);

      if (err.response) {
        toast.error("Something went wrong");
      }
      else
          toast.error(err.message);
    }
    finally {
        setLoading(false);
    }
  }

  return [loading, logout];
}

export default useLogout