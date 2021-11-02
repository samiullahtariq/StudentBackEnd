const express = require("express")
const UserModel = require("../models/userModel")

const route = express.Router()

route.post("/customer" , async(req ,res)=>{
    try{
        let user =  new UserModel(req.body)
        let userData = await user.save()
        res.send(userData)
    }catch(err){
        res.send(err)
    }
   
})

route.get("/customer" , async(req ,res)=>{
    try{
        let Data = await new UserModel.find()
    res.send(Data)
    }catch(err){
        res.send(err)
    }
    
})


route.patch("/customer/:id" , async(req ,res)=>{
    try{
        let _id = req.params.id
    let data = await new UserModel.findByIdAndUpdate(_id ,req.body,{
        new:true
    })
    res.send(data)
    }catch(err){
        res.send(err)
    }  
})

route.delete("/customer/:id" , async(req ,res)=>{
    try{
        let id = req.params.id
        let response = await new UserModel.findByIdAndDelete({_id : id})
        res.send(response)
    }catch(err){
        res.send(err)
    }
})


module.exports = route