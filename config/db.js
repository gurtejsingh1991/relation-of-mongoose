const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/mrproduction",{useNewUrlParser:true,useUnifiedTopology:true})

.then(()=>{
    console.log("database connect succesfully");
})
.catch(()=>{
    console.log("error is connected with database"+err);
})