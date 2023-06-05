const express = require("express")
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const uri = "mongodb+srv://igorgusakov199918:3050dD@cluster0.kxfbiia.mongodb.net/?retryWrites=true&w=majority";
const authRouter = require('./authRouter')


const app = express()


app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try{
        await mongoose.connect(uri)
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()