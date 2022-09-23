var express = require('express');

var app=express()

app.use('/',(req,res,next)=>{
     console.log("Middleware called");
     next();
})

app.get('/user',(req,res)=>{
    console.log("/abc request called");
    res.send('welcome app use');
})

app.listen(3000,()=>{console.log("server start @localhost:3000")})