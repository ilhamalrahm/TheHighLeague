const express=require("express");
const app=express();
const mongoose=require("mongoose");

const User=require("../Models/User");

const router=express.Router();



router.post("/signup",(req,res)=>{

    const {firstname,lastname,email,phone,password}=req.body;
    const fullname=firstname+" "+lastname;

    const newuser=User({
        firstname:firstname,
        lastname:lastname,
        fullname:fullname,
        email:email,
        phone:phone,
        password:password

    })

    newuser.save((error,doc)=>{
        if(error)
        {
            console.log("error signing up")
        }
        else
        {
            console.log("signup complete")
            console.log(doc);
        }

        res.status(200).json({success:true});
        
    });


})


router.post("/login",async(req,res)=>{
    const {phone,password}=req.body;
    console.log("signin detected");
    console.log(email);
    console.log(password);
 
    
    const user= await User.findOne({phone:phone}).select("+password");
    if(!user || password!=user.password)
    {
        console.log("username or password incorrect");
        
    }
    else{
        console.log("successful")
      await createusertoken(user,200,req,res);
      console.log("token created");
      
    }
})













const createusertoken=async(user,code,req,res)=>{
    const token=Signtoken(user.name);
    let d=new Date();
    d=d.setDate(d.getDate()+30);

    await res.cookie("jwt",token,{
        expiresIn:d,
        httpOnly:true,
        secure:true,
        sameSite:"None"
    }).status(200).json({success:true});

    console.log("created token and sent");



}

const Signtoken=(name)=>{
    return jwt.sign({name},"random_key",{
        expiresIn:10000000
    });
}


module.exports=router;