/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext"
import io from 'socket.io-client'

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = (({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser)
        {
            const socket = io("https://lets-chat-fjae.onrender.com/", {
                query: {
                    userId: authUser._id
                }
            });

            setSocket(socket);
            
            //socket.on IS USED TO LISTEN TO THE EVENTS. CAN BE USED IN BOTH CLIENT AND SERVER SIDE
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        }
        else
        {
            if (socket)
            {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])


    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
})