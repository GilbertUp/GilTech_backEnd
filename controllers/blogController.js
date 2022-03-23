import Blog from "../models/blogModel.js";
export const createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                newBlog
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
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json({
            status: "success",
            results:blogs.length,
            data: {
                blogs
            }
        })
        // console.log(blogs)

    } catch (error) {
        res.status(500).json({
            message: "error occured",
            data: {
                error
            }
        })

    }

}
export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("comments")
        // res.status(200).json({
        //     status: "success",
        //     data: {
        //         blog
        //     }
        // })
        if (blog != null) {
            res.status(200).json({
                Message: `Blog retrieved successfully`,
                Data: blog
            })

        } else {
            res.status(404).json({
                Message: "Blog not found!"
            })

        }

    } catch (error) {
        res.status(404).json({
            message: "Blog not found",
             
        })

    }

}
export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(blog!=null){

            res.status(200).json({
                status: "success",
                message:"Blog upudated successfull",
                data: {
                    blog
                }
            })
        }else{
            res.status(404).json({
                message:"Blog with that id not found"
            })
          
        }
       

    } catch (error) {
        res.status(404).json({
            message: "Blog with that id not found",
            
        })

    }

}
export const deleteBlog = async (req, res) => {
    try {
     const delBlog=await Blog.findByIdAndDelete(req.params.id)
      if(delBlog!=null){
        res.status(200).json({
            message: "Blog deleted  successfully",
            status: "success",
            
        })
      } else{
          res.status(404).json({
              message:"Blog not found"
          })
      }
     
     

    } catch (error) {
        res.status(404).json({
            message: "Blog not found",
            data: {
                error
            }
        })

    }

}


