import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function useGetContacts() {
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([]);

    async function getContacts()
    {
        setLoading(true);
        try {
            const response = await axios.get('/api/users');
            const data = response.data;

            // console.log(data);

            setContacts(data);
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
        try {
            getContacts();
        }
        catch {
            toast.error("Something went wrong");
        }
    }, [])

    return [loading, contacts];
}

export default useGetContacts