import { useEffect } from "react"
import { useSocketContext } from "../../context/SocketContext"
import useChat from "../zustand/useChat"
import { useAuthContext } from "../../context/AuthContext"
import notificationSound from "../assets/sounds/notification.mp3"

function useListenMessage() {
  const {socket} = useSocketContext();
  const {selectedContact, messages, setMessages} = useChat();
  const {authUser} = useAuthContext();

  useEffect(() => {
    socket?.on("newMessage", (data) => {
        const {newMessage, senderId, receiverId} = data;

        if (authUser._id == receiverId && senderId == selectedContact._id) {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        }
    })

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages, authUser, selectedContact])
}

export default useListenMessage