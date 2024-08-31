import useGetContacts from "../../hooks/useGetContacts"
import { getRandomEmoji } from "../../utils/emojis";
import Contact from "./Contact"

function Contacts() {
  const [loading, contacts] = useGetContacts();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {
        loading? <span className="loading loading-spinner"></span> :
        contacts.map((contact, index) => <Contact contact={contact} key={contact._id} emoji={getRandomEmoji()} lastIndex={index == contacts.length - 1}/>)
      }
    </div>
  )
}

export default Contacts