const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require('cors');
const bodyParser = require('body-parser');
const cookieparser= require('cookie-parser');
const authuser=require("./Auth/authuser");
const checkuser=require("../Backend/Auth/checkuser");


mongoose.connect("mongodb://0.0.0.0:27017/reactnode",{useUnifiedTopology: true,useNewUrlParser: true},(err,client)=>{
    if(!err)
    {
        console.log("connection to database successfull")

    }
    else{
        console.log("error connecting to database")
    }
}
)

app.use("/auth/",authuser);
app.use("/",checkuser);



app.listen(5005,()=>{
    console.log("Backend is running");
})