import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
    try {
        const email = req.body.email;
        const emailExist = await User.find({
            email: email.toLowerCase()
        })
        if (emailExist.length) {
            res.status(400).json({
                Message: `E-mail <${email}> exists!`
            })
        } else {


            const salt = await bcrypt.genSalt(10)
            const pwd = await bcrypt.hash(req.body.password, salt)
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                role: req.body.role,
                password: pwd,
        
            })

            res.status(201).json({
                message: "your account has been successfully created @GilTech",
                data: {
                    newUser
                }
            })

        }
    } catch (error) {
        res.status(400).json({
            message: "error occured up",
            data: 
                error.stack
            
        })

    }

}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: "success",
            result: users.length,
            data: {
                users
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
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        // res.status(200).json({
        //     status: "success",

        //     data: {
        //         user
        //     }
        // })

        if (user != null) {
            res.status(200).json({
                Message: `User retrieved`,
                Data: user
            })

        } else {
            res.status(404).json({
                Message: "User not found!"
            })

        }
    } catch (error) {
        res.status(404).json({
            message: "error occured,my be you passesed incomplite id",
            data: {
               // error
               
            }
        })

    }

}
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: {
                user
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
export const deleteUser = async (req, res) => {
    try {
   const delUser = await User.findByIdAndDelete(req.params.id)
        
    if(delUser!=null){
        res.status(200).json({
            message: "User deleted  successfully",
            status: "success",
            
        }) 
    }else{
        res.status(404).json({
            message:"User not found"
        })
    }
        
       

        
    } catch (error) {
        res.status(404).json({
            message: "User not found",
            // data: {
            //     error
            // }
        })

    }

}

export const login = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({ email: body.email });
        if (user) {
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                //res.status(200).json({ Message: "User successfully logged in!!" });
                res.status(200).json({
                    message: "User logged in successfully",
                    token: jwt.sign({ email: user.email, role:user.role,fullName: user.name, _id: user._id }, 'giltech')
                });
            } else {
                res.status(400).json({ Error: "Invalid Password!!" });
            }
        } else {
            res.status(401).json({ Error: "User does not exist!!" });
        }
    } catch (error) {
        res.status(404).json({ Error: "Internal error" })
    }
}