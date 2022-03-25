import express from "express";
import{
    getAllComments,deleteComment,getComment,createComment
}from "./../controllers/commentController.js"
import { protect,restrictTo } from "../middleWares/auth.js";
const router=express.Router()


router.route("/:id/comment").post(protect,createComment).get(getAllComments)
router.route("/:blogId/:commentId").get(getComment).delete(protect, restrictTo('admin'),deleteComment)
export default router


