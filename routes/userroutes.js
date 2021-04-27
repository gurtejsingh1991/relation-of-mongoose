const express=require('express');

var rana=require('../controller/usercontroller');

var routes=express.Router();

routes.post('/addcompany',rana.addCompany);
routes.post('/addproduct',rana.mycompany);
routes.get('/product/:pid',rana.getproduct);

module.exports=routes;