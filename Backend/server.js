const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

// Server Config

const app = express()
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(cors())

// connecting mongodb *****************************
const MDB_CONNECT = "mongodb+srv://vikas:isVc6E0DzQyEHXxB@cluster0.tgvlc.mongodb.net/?retryWrites=true&w=majority";
// isVc6E0DzQyEHXxB

mongoose.connect(MDB_CONNECT, 
  (err) => {
    if(err){
      return console.log(err)
    }
    console.log("Connected to MongoDB")
})

// calling apis
app.use("/api", require("./routers/userRouter"));

app.listen(PORT, () => {
  console.log(`Server listening on PORT : ${PORT}`);
})