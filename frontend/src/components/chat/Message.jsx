/* eslint-disable react/prop-types */
import { useAuthContext } from "../../../context/AuthContext"
import useChat from "../../zustand/useChat"

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedContact} = useChat();

  const fromMe = message.senderId == authUser._id;
  const chatClass = fromMe? "chat-end" : "chat-start";
  const dp = fromMe? authUser.dp : selectedContact.dp;
  const bubbleColor = fromMe? "bg-blue-500" : "bg-gray-700";
  const time = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  const shakeClass = message.shouldShake? "shake" : "";

  return (
    <>
    <div className={`chat ${chatClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={dp} alt="avatar" />
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleColor} ${shakeClass}`}>{message.message}</div>

        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-100">{time}</div>
    </div>
    </>
  )
}

export default Message