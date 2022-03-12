
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("../Models/User");
const router=express.Router();






router.get("/user",async(req,res)=>{
    console.log("running chekuser");

    var currentuser;

    if(req.cookies.jwt)
    {
        console.log(req.cookies.jwt + " cookie got in database")
        const token=req.cookies.jwt;
        try{
            const decode= await jwt.verify(token,"random_key");
            console.log(decode)
            // const [{name}]= await User.find({name:decode.name});
            const data=await User.findOne({name:decode.name})
            
            console.log(data);
            currentuser=data;
        
        }
        catch(Err)
        {
            console.log("jwt changed");
            currentuser=null;
        }
    }
    else{
        console.log("cookie not found, no current user");
        currentuser=null
    }
    console.log(currentuser);
    res.status(200).json({success:true,currentuser:currentuser});

    console.log("sent user");
})


module.exports=router;