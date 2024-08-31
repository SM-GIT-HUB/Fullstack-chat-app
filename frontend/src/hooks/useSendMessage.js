import { useState } from 'react'
import useChat from "../zustand/useChat"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext'

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {selectedContact, messages, setMessages} = useChat();
    const {authUser} = useAuthContext();

    async function sendMessage(message)
    {
        if (message.length == 0) {
            return;
        }

        if (authUser._id == selectedContact._id) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`/api/messages/send/${selectedContact._id}`, {message});
            const data = response.data;

            setMessages([...messages, data]);
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

    return [loading, sendMessage];
}

export default useSendMessage