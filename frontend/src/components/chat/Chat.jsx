import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./MessageSkeleton"
import useListenMessage from "../../hooks/useListenMessage"

function Chat() {
  const [loading, messages] = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessage();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 50)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto w-full">
      {
        loading &&
        <>
          <MessageSkeleton/>
          <MessageSkeleton/>
          <MessageSkeleton/>
          <MessageSkeleton/>
          <MessageSkeleton/>
        </>
      }

      {
        !loading && messages.length == 0 && (
          <p className="text-center text-gray-300">Send a message to get started</p>
        )
      }

      {
        !loading && messages.length > 0 && (
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message}/>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Chat