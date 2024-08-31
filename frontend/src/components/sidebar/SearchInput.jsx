/* eslint-disable no-unused-vars */
import { useState } from "react"
import {IoSearchSharp} from "react-icons/io5"
import useChat from "../../zustand/useChat"
import useGetContacts from "../../hooks/useGetContacts"
import toast from "react-hot-toast"

function SearchInput() {
  const [search, setSearch] = useState("");
  const {setSelectedContact} = useChat();
  const [loading, contacts] = useGetContacts();

  function handleSubmit(e)
  {
    e.preventDefault();

    if(!search) {
      return;
    }

    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long");
    }

    console.log(contacts);

    const myContact = contacts.find((each) => each.fullName.toLowerCase().includes(search.toLowerCase()))
  
    console.log(myContact);

    if (myContact) {
      setSelectedContact(myContact);
      setSearch("");
    }
    else
      toast.error("No contact found");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search.." className="input input-primary input-bordered rounded-full"
        value={search} onChange={(e) => {setSearch(e.target.value)}}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput