import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
export const protect = async (req, res, next) => {

    let token
    try {
        // Get token and Check if is there.
        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        // console.log(token)
        if (!token) {
            return res.status(401).json({ message: 'Login first' })
        }
        //  Token verification
        const decoded = await promisify(jwt.verify)(token, 'giltech')
        //console.log(decoded)
        // Check if User exist
        const freshUser = await userModel.findById(decoded._id)
        if (!freshUser) {
            return res.status(401).json({ message: 'User not found' })
        }
        req.user = freshUser
        
        next()
    } catch (error) {
        res.status(401).json({
            error: error.stack
        })
    }
   
}


export const restrictTo = (...roles) => {
   
    return (req, res, next) => {
        //console.log(req.user)
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({ message: 'You do not have access to this role.' });
        }
        next()
    }
}