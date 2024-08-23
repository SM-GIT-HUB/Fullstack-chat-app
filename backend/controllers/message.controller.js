import conversationModel from "../models/conversation.model.js"
import messageModel from "../models/message.model.js"

const sendMessage = async(req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        if (senderId == receiverId) {
            return res.status(401).json( { error: "no self messages" } );
        }

        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        })

        if (newMessage)
        {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        //SOCKET IO WILL BE IMPLEMENTED HERE

        res.status(201).json( newMessage );
    }
    catch(err) {
        console.log("Error in sending message", err.message);
        res.status(500).json( { error: "internal server error" } );
    }
}

const getMessages = async(req, res) => {
    try {
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        if (senderId == receiverId) {
            return res.status(401).json( { error: "no self messages" } );
        }

        const conversation = await conversationModel.findOne({
            participants: {$all: [senderId, receiverId]}
        }).populate("messages") // ACTUAL MESSAGES

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    }
    catch(err) {
        console.log("Error in sending message", err.message);
        res.status(500).json( { error: "internal server error" } );
    }
}


export {sendMessage, getMessages}