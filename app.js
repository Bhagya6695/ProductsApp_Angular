const express = require('express');
var app = new express();
var bodyParser =require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const mongoose=require('mongoose');
const path=require('path');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


const productRouter=require('./src/routers/productRouter')();
const signupRouter=require('./src/routers/signupRouter')();


// app.use(express.static(path.join(__dirname,"/public")));
app.use('/products',productRouter);
app.use('/signup',signupRouter);

app.get('/',(req,res)=>{
  res.send("hello from server")
});


// mongoose.connect("mongodb://localhost:27017/ProductDb");
// mongoose.set('useFindAndModify', false);
// var db=mongoose.connection;
// db.on('error',(error)=>{
//     console.log(error);
// });
// db.once('open',()=>{
//     console.log("Success");
// });


app.listen(3000,function(){
  console.log('listening to port 3000');
});
