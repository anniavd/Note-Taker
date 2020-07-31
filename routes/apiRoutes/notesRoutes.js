const router = require("express").Router();
const fs=require('fs');
const{db}=require('../../data/db')




router.get('/api/notes',(req,res)=>{

    fs.readFile('../..data/db','utf8',function(error,data){
        res.json(JSON.parse(data));
        //console.log(data)
    })
});







module.exports=router;