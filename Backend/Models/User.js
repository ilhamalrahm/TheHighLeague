const mongoose=require("mongoose");
const express=require("express");

const Schema=mongoose.Schema;

const User=new Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    dob:{
        type:Date,
    },
    gender:{
        type:String,
    },
    aadhaar_no:{
        type:String,
    }
})

module.exports=mongoose.model("User",User);