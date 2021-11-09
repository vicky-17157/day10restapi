//const express = require('express');
const mongoose = require('mongoose'); 
 
const tomeSchema= mongoose.Schema({
     title:{
          type:String,
           required:true
     },
     price:{
          type:Number,
          required:true 
     },
     author:{
          type:String,
          required:true
     }
            
             
});



 module.exports=mongoose.model('Tome',tomeSchema); 