const express = require('express');

const router = express.Router();

const burger= require('../models/burgers.js')

// this route is getting the burger data and rendering it onto the index page
router.get('/', function(req,res){

   
    burger.getBurgers(function(burgers_data){
    // console.log(burgers_data)
    console.log("1")
    res.render('index',{burgers_data});})
    
}
) 

// this route is eatin gth eburger
router.put('/burgertime/update',function(req,res){
    burger.eat(req.body.burgers_id, function(){

        res.redirect('/')
    })
})


//im trying to get a function that resets all of the burgers to not be devoured and i am struggling with it
router.post('/burgertime/resetBurger',function(req,res) {
    burger.reviveBurger(function(burgers_data){
        // console.log(burgers_data)
        res.redirect('/');
     
    })})

// this route is add a burger to the burgertime page
router.post('/burgertime/create',function(req,res) {
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports=router; 