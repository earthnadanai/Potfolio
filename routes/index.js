const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    //res.send("<h1>My Portfolio</h1>");
    res.render('index',{myData});
});

router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.send("<h1>My Education</h1>");
});

router.get('/workepxperience',(req,res)=>{
    res.send("<h1>My Work Experience</h1>");
});

router.get('/skill',(req,res)=>{
    res.send("<h1>My Skill</h1>");
});

module.exports = router;


