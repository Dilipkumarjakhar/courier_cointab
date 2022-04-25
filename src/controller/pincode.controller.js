const express = require('express');

const Pincode=require('../model/pincode.model');
const router=express.Router();

router.get('/',async(req,res)=>{
    try{

       let pin=req.query.pincode;
       let wt=req.query.weight;
       let ty=req.query.type;
       console.log(pin,wt, ty)

       let pindata=await Pincode.find({pin_code:{$eq:pin}})
       if(pindata){
           console.log('pindata:', pindata)
           res.status(201).send({pindata})
           
        }else{
           res.status(201).send({error})

       }
     
    }catch(err){
        res.status(400).send({mess:"error"})

    }
})
router.post('/priceData',(req,res)=>{
    try{

        const pin=Pincode.create(req.body);
        res.status(201).send(pin)
    }catch(err){
        res.status(400).send({message:"error"})

    }
})

module.exports = router;