const express = require("express");
const app = express();
const path = require("path");

app.get("/signup",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/mainpage",(req,res)=>{
  res.sendFile(path.join(__dirname,"indextwo.html"));
})

app.get("/thankyou",(req,res)=>{
  res.sendFile(path.join(__dirname,"indexthree.html"));
})

app.listen(3979,()=>{
  console.log("server is listening");
})