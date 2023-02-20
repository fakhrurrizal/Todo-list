const User = require("../models/user")

 const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json({
                success: false,
                message: 'all fields are required'
            })
        }
        const isUser = await User.findOne({ email })
        if (isUser) {
            return res.status(400).json({
                success: false,
                message: 'user Already present'
            })
        }
        const user = new User(req.body)
        const response = await user.save()
        if (!response) {
            return res.status(200).json({
                success: false,
                message: 'user registeration failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'user registered successfully',
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

 const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(500).json({
                success: false,
                message: 'all fields are required'
            })
        }
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'user not exists'
            })
        }
        const isPasswordCorrect = await user.comparePassword(password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        const token = await user.generateToken()
        res.status(200).json({
            success: true,
            message: 'user logged in successfully',
            token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { signup, login }