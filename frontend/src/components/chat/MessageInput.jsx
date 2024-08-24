import {BsSend} from "react-icons/bs"

function MessageInput() {
  return (
    <form action="" className="px-4 my-3">
        <div className="w-full flex items-center gap-[2px]">
            <input type="text" placeholder="type message.." className="border text-sm rounded-[7px] block w-full p-2.5 bg-gray-100 border-gray-600 outline-none" />

            <button type="submit" className="flex items-center bg-white rounded-full p-[11px] text-blue-700 border border-white hover:border-blue-700">
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput