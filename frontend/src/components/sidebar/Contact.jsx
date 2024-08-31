/* eslint-disable react/prop-types */

import useChat from "../../zustand/useChat"

function Contact({contact, emoji, lastIndex}) {
    const {selectedContact, setSelectedContact} = useChat();

    const isSelected = selectedContact?._id == contact._id;

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${isSelected && "bg-sky-500"}
                `} onClick={() => setSelectedContact(contact)}>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={contact.dp} alt="" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{contact.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>
            {
                !lastIndex && <div className="divider my-0 py-0 h-1"></div>
            }
        </>
    )
}

export default Contact