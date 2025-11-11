const express =require('express');
const router = express.Router();

const path=require('path');

router.use('/add-product',(req,res,next)=>{
    //res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Save</button></input></form>');
        res.sendFile(path.join(__dirname,"../","Views", 'add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;