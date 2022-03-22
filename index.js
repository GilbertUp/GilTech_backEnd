
import express from 'express';
import userRouter from "./routes/userRoutes.js"
import messageRouter from "./routes/messageRoutes.js"
import blogRouter from "./routes/blogRoutes.js"
import commentRouter from "./routes/commentRoutes.js"
import { login } from './controllers/userController.js';
const app = express();
import cors from 'cors';
app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>res.json({message:'request received, thanks then'}));

app.use("/api/v1/users",userRouter)
app.use("/api/v1/blogs",blogRouter)
app.use("/api/v1/blogs",commentRouter)
app.use("/api/v1/messages",messageRouter)
app.use("/api/v1/users",login)

export default app
 