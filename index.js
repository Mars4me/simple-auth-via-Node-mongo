const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const {login, password, dbName} = require('./config')

const DB_URL = `mongodb+srv://${login}:${password}@cluster0.60zqr.mongodb.net/${dbName}?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

