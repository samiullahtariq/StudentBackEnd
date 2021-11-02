
const mongoose = require("mongoose")

let conn =async()=>{
    try{
        await mongoose.connect(process.env.Mongo_Url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })

    }catch(err){
        console.log(err)
        console.log("Connection failed")
    }
}

module.exports = conn