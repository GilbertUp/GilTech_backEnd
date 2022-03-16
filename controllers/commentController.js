import Comment from "../models/commentModel.js";
import Blog from "../models/blogModel.js";
export const createComment = async (req, res) => {
    try {
        const newComment = await Comment.create({
            postId: req.params.id,
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment

        })
        
        const blogPost = await Blog.findById(req.params.id);
        blogPost.comments.push(newComment)
        await blogPost.save((e) => {
            res.status(201).json({
                Message: "New Comment Added Successfully",
                Data: newComment
            })
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured try to fix it",
            data: { error }
        })
    }
}
export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id })
        res.status(200).json({
            status: "All comments retrieved sucessfully",
            result: comments.length,
            data: { comments }
        })
    } catch (error) {
        res.status(500).json({
            message: "An error occured",
            data: { error }
        })
    }
}
export const getComment = async (req, res) => {
    try {
        const blogId = req.params.blogId
        const commentId = req.params.commentId
        const comment = await Comment.findOne({
            postId: blogId,
            _id: commentId
        })
        if (comment != null) {
            res.status(200).json({
                Message: `One comment retrieved`,
                Data: comment
            })

        } else {
            res.status(500).json({
                Message: "Comment not found!"
            })

        }
    } catch (error) {
        res.status(404).json({
            message: `An error occured, Comment with an ID ${req.params.id} not found!!!:new_moon_with_face:`,
            data: { error }
        })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const blogId = req.params.blogId
        const commentId = req.params.commentId
        const comment = await Comment.findOneAndDelete({
            postId: blogId,
            _id: commentId
        })
        if (comment != null) {
            res.status(200).json({
                Message: "Comment Deleted successfully!"
            })
        } else {
            res.status(404).json({
                Message: `An error occured, Comment not found!!!`,
            })
        }
    } catch (error) {
        res.status(404).json({
            message: "An error occured",
            data: { error }
        })
    }
}