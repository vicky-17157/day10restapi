const express = require('express');
const router = express.Router();
const Tome = require('../models/tome');

router.get('/', async(req,res) =>{
     try{
          const tome = await Tome.find();
          res.json(tome);
     }catch (err){
          res.json({message:err});
     }
});


// getting a post by id

router.get('/:tomeid', async(req,res) =>{
     try{
          const tome = await Tome.findById(req.params.tomeid);
           res.json(tome);
         }
         catch(err){
              res.json({message:err});
          }
});     

 // creating a post

router.post('/',(req,res)=>{
     const tome =new Tome({
          title:req.body.title,
          price:req.body.price,
          author:req.body.author
     });
         tome.save().
         then(data =>{
             res.json(data);
          }).catch (err=>{
               res.json({message:err});
     })
});

// deleting a post

router.delete('/:_id', async(req,res) =>{
     try{
           const removepost = await Tome.deleteOne({_id: req.params._id});
           res.json(removepost);
     }
     catch(err){
          res.json({message:err});
     }
});

// updating a post by id

router.patch('/:tomeid', async(req,res) =>{
     try{
           const editpost = await Tome.updateOne({_id: req.params.tomeid});
           res.json(editpost);
     }
     catch(err){
          res.json({message:err});
     }
});

module.exports= router;

