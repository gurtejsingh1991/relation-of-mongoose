require('../model/usermodel');
require('../model/companymodel');
require('../model/productmodel')
const mongoose=require('mongoose');

var comp=mongoose.model('company');
var mycomp=mongoose.model('comp');




module.exports.addCompany=(req,res)=>{
    var newComp=new comp({
  name:req.body.cname,
  address:req.body.cadd,
  product:req.body.cproduct
    });

    newComp.save().then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'company created',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(400).json({
            success:false,
            message:'error in creating company',
            error:err.message
        })
    })
}
//  for add company
module.exports.mycompany=(req,res)=>{
    var newmycomp=new mycomp({
        cname:req.body.cnm,
        cadd:req.body.caddress
    });

    newmycomp.save().then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'new company created',
            data:docs
        })
    })

    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'error in adding new company',
            error:err.message  
        })
    })
}

// add product

module.exports.myproduct=(req,res)=>{
    var newmypro=new this.myproduct({
        pname:req.body.pnm,
        price:req.body.pp,
        company:req.body.comp_id
    });
    newmypro.save().then((docs)=>{
        return res.sttatus(200).json({
            success:true,
            message:"new product added",
            data:docs
        })
    })

    .catch((err)=>{
        return res.status(400).json({
            success:false,
            message:"error in adding product",
            error:err.message
        })
    })
}

module.exports.getproduct=(req,res)=>{
    return this.myproduct.findById({_id:req.params.pid}).populate('company').exec().then((docs)=>{
        res.status(200).json({
            success:true,
            message:"product list ",
            data:docs
        })
    })

    .catch((err)=>{
        res.status(400).json({
            success:false,
            message:'not found',
            error:err.message
        })
    })
}