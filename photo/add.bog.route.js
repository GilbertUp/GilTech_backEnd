import  express from "express";
import multer from "multer";
import { protect,restrictTo } from "../middleWares/auth.js";
import { createBlog } from "../controllers/blogController.js";


const router = express.Router()

const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("invalid image file!", false);
    }
};
const upload = multer({ storage, fileFilter });

router.post("/", protect, restrictTo('admin'), upload.single("photo"), createBlog);

export default router

