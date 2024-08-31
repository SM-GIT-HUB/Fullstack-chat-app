import { create } from "zustand"

const useChat = create((set) => ({
    selectedContact: null,
    setSelectedContact: (selectedContact) => set({selectedContact}),
    messages: [],
    setMessages: (messages) => set({messages})
}))


export default useChat