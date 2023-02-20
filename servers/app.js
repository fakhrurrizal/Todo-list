const dotenv = require("dotenv")
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
const user = require("./routes/user")
const category = require("./routes/category")
const task = require("./routes/task")
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

// Route
app.use('/auth', user)
app.use('/category', category)
app.use('/task', task)



module.exports = app