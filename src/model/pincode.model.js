const mongoose=require('mongoose');


const OrderDetails=new mongoose.Schema({
   
  pin_code:{type:Number, required:true},
  Rate_Type:{type:String, required:true},
  Zone:{type:String, required:true},
  First_kg:{type:Number, required:true},
  Every_Additional_kg:{type:Number, required:true},
 
})

module.exports = mongoose.model('order',OrderDetails)