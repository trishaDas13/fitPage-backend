const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors");
const stockRouter = require("./router/router");

dotenv.config();
const app = express();
app.use(express.json());

//todo: connected frontend
app.use(cors({
    origin:"*"
}));

//todo: connect to the database
mongoose.connect(`${process.env.DATABASE_URL}`)
.then(() => console.log("database connected"))
.catch(() => console.log("failed to connect with database"));

//todo: importing routes
app.use("/api/v1/stocks", stockRouter)

//todo: Server error handle
app.use("*",(req, res)=>{
    res.status(500).json({
        suceess : false,
        message : "server error"
    })
})

//todo: Listen to the port
app.listen(process.env.PORT,(req,res) =>{
    console.log(`Server is up and running at port no. ${process.env.PORT}`);
})