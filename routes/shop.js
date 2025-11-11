const express =require('express');
const router = express.Router();
const path=require('path');


router.get('/',(req,res,next)=>{
     
    //res.send('Hello from express');
res.sendFile(path.join(__dirname,'../' ,'Views', 'shop.html'));
});

module.exports=router;