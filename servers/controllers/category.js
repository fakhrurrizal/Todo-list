const Category = require("../models/category")
const user = require("../models/user")

const createCategory = async (req, res) => {
    try {
        const { title, createdAt } = req.body
        const user_id = req.user.userid._id
        if (!title) {
            return res.status(500).json({
                success: false,
                message: 'category title is empty'
            })
        }
        const category = new Category({
            title: title,
            user_id: user_id,
            createdAt: createdAt
        })
        const response = await category.save()
        if (response) {
            res.status(200).json({
                success: true,
                message: 'category created successfully',
                data: category
            })
        } else {
            res.status(200).json({
                success: false,
                message: 'cannot save category in DB'
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const getCategory = async (req, res) => {
    try {
        const userId =  req.user.userid._id
        const username = req.user.username
        const categories =  await Category.find({ userId  })
        if (!categories) {
            res.status(500).json({
                success: false,
                message: 'categories Not Found'
            })
        }
        res.status(200).json({
            message: 'categories fetching successfully',
            categories,
            username
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

 const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            res.status(200).json({
                success: false,
                message: "can't find id"
            })
        }
        const categories = await Category.findById(id)
        if (!categories) {
            res.status(200).json({
                success: false,
                message: 'categories Not Found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Categories fetching successfully',
                categories
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const editCategory = async ( req, res ) => {
    try {
        const { id } = req.params
        const { title } = req.body
        if (!id) {
            res.status(500).json({
                success: false,
                message: "can't find id"
            })
        }
        // Category: check if Category is present in DB
        const categories = await Category.findByIdAndUpdate(id, {
            title: title
        })
        if (!categories) {
            res.status(500).json({
                success: false,
                message: 'categories updation failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'categories updated successfully',
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteCategory = async ( req, res ) => {
    try {
        const { id } = req.params
        if (!id) {
            res.status(500).json({
                success: false,
                message: "can't find id"
            })
        }
        const categories = await Category.findByIdAndDelete(id)
        if (!categories) {
            res.status(500).json({
                success: false,
                message: 'Categories deletion failed'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Categories deleted successfully',
                categories
            })
        }
    } catch (error) {
        throw new Error(error.message || 'Error')
    }
}


module.exports = {createCategory, getCategory, getCategoryById, editCategory, deleteCategory }