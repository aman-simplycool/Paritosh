const mongoose  = require("mongoose")

const schema =new mongoose.schema({
  email:{
   type:String
  },
  name:{
   type:String 
  }  
})
const users=new mongoose.model('Users',schema);
module.exports=users;
