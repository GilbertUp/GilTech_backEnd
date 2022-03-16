import express from "express";
import {
getAllBlogs,createBlog,updateBlog,deleteBlog,getBlog
}from "./../controllers/blogController.js"
import { protect,restrictTo } from "../middleWares/auth.js";
const router=express.Router()

router.route("/").get(getAllBlogs).post(protect, restrictTo('admin'),createBlog)
router.route("/:id").get(getBlog).patch(protect, restrictTo('admin'),updateBlog).delete(protect, restrictTo('admin'),deleteBlog)
export default router