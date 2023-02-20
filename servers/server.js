const app = require('./app')
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/connection")
connectDB()
app.listen(process.env.PORT, () => {
    console.log(`Listening server at localhost:${process.env.PORT}`)
})