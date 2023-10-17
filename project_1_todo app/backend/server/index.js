const express= require("express");
const { connection } = require("../database/db");




const app = express();


app.get("/",(req,res)=>{
    res.send("Base Api EndPoint")
})


app.listen(5000,()=>{
    connection.then(()=>{console.log("listening on port 5000")})
    .catch((err)=>{console.log(err)})
})