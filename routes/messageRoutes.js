import express from "express";
import{
    getAllMessages,updateMessage,deleteMessage,getMessage,createMessage
}from "./../controllers/messageController.js"
import { protect,restrictTo } from "../middleWares/auth.js";
const router=express.Router()

router.route("/").get(protect, restrictTo('admin'),getAllMessages).post(createMessage)
router.route("/:id").get(getMessage).patch(updateMessage).delete(protect, restrictTo('admin'),deleteMessage)
export default router