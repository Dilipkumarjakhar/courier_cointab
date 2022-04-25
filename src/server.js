const express=require('express');
const app= express();
const connect=require('./config/db');
const port =process.env.PORT ||5000;
const pincontroller=require('./controller/pincode.controller');


app.use(express.json());
app.use('/data',pincontroller);

// 3:step hreoku

if(process.env.NODE_ENV=="production"){
    app.use(express.static("courier/build"))
}


app.listen(port,async(req,res)=>{
    await connect();
    console.log('port is connected',port)
})




