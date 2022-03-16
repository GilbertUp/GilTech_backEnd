import express from "express";
import {
getAllUsers,createUser,updateUser,deleteUser,getUser, login
}from "./../controllers/userController.js"
import { restrictTo,protect } from "../middleWares/auth.js";
import SignUpValidator from "../middleWares/SignUpValidator.js";
const router=express.Router()

router.route("/").get(protect, restrictTo('admin'),getAllUsers).post(SignUpValidator,createUser)
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)
router.route("/login").post(login)
export default router