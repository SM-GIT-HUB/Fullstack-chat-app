import {BsSend} from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"
import { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState("");
  const [loading, sendMessage] = useSendMessage();

  async function handleSubmit(e)
  {
    e.preventDefault();

    if (message.length > 0) {
      await sendMessage(message);
    }

    setMessage("");
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full flex items-center gap-[2px]">
            <input type="text" placeholder="type message.." className="border text-sm rounded-[7px] block w-full p-2.5 bg-gray-100 border-gray-600 outline-none"
            value={message} onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="flex items-center justify-center bg-white rounded-full w-[42px] h-[40px] text-blue-700 border border-white hover:border-blue-700 overflow-hidden">
              {
                loading? <div className="loading loading-spinner h-[5px] w-[5px]"></div> :
                <BsSend/>
              }
            </button>
        </div>
    </form>
  )
}

export default MessageInput