/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useChat from "../zustand/useChat"
import axios from "axios"
import toast from "react-hot-toast"
import { useAuthContext } from "../../context/AuthContext"

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedContact} = useChat();
  const {authUser} = useAuthContext();

  async function getMessages()
  {
    setLoading(true);

    try {
      if (authUser._id == selectedContact._id) {
        return;
      }

      const response = await axios.get(`/api/messages/${selectedContact._id}`);
      const data = response.data;

      setMessages(data);
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

  useEffect(() => {
    if (selectedContact != null) {
        getMessages();
    }
  }, [selectedContact, setMessages])

  return [loading, messages];
}

export default useGetMessages