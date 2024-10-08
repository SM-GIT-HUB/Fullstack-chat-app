import { useEffect } from "react"
import useChat from "../../zustand/useChat"
import Chat from "./Chat"
import MessageInput from "./MessageInput"
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from "../../../context/AuthContext"

function NoChatSelected() {
    const {authUser} = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullName} ❄️</p>
                <p>Select a contact to get started</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

function ChatContainer() {
    const {selectedContact, setSelectedContact} = useChat();

    useEffect(() => {
        setSelectedContact(null);
    }, [setSelectedContact])

    const noChatSelected = selectedContact == null;

    return (
        <div className="h-[55%] w-full sm:h-auto sm:w-auto sm:max-w-[600px] md:min-w-[450px] flex flex-col">
            {
                noChatSelected? <NoChatSelected/> :
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2 text-center">
                        <span className="label-text text-white">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{selectedContact.fullName}</span>
                    </div>

                    <Chat/>
                    <MessageInput/>
                </>
            }
        </div>
    )
}

export default ChatContainer

{/* HEADER */}