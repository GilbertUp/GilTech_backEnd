import Message from "../models/messageModel.js";

export const createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body)
        res.status(201).json({
            status: "success",
            results: newMessage.length,
            data: {
                newMessage
            }
        })

    } catch (error) {
        res.status(400).json({
            message: "error occured",
            data: {
                error
            }
        })

    }

}
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find()
        res.status(200).json({
            status: "success",
            data: {
                messages
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "error occured",
            data: {
                error
            }
        })

    }

}
export const getMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id)
     if(message!=null){
        res.status(200).json({
            status: "success",
            message:"message retrieved successfully",
            data: {
                message
            }
        })
     } else{

        res.status(404).json({
            message:"Message not found"
        })
     }  

    } catch (error) {
        res.status(404).json({
            message: "message not found",
            data: {
                error
            }
        })

    }

}
export const updateMessage = async (req, res) => {
    try {
        const upMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {
            // new: true,
            // runValidators: true
        })
        if(upMessage!=null){
            res.status(200).json({
                status: "success",
                message:"message upudate successfully",
                data: {
                    upMessage
                }
            })

        }
       else{
           res.status(404).json({
               message:"message not found"
           })
           }
       }

     catch (error) {
        res.status(404).json({
            message: "message not found",
            data: {
                error
            }
        })

    }

}
export const deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Message deleted  successfully",
            status: "success",

            data: {

            }
        })

    } catch (error) {
        res.status(404).json({
            message: "error occured",
            data: {
                error
            }
        })

    }

}