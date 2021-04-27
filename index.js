const express =require('express');
var bodyparser=require('body-parser');
require('./config/db');

var api=require('./routes/userroutes');

const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',api);

const port=process.env.port ||3000;

app.listen(port,()=>{
    console.log("server is runing at http://localhost:"+port);
})