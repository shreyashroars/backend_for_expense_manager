const mongoose = require('mongoose');
const mongodbID=require('../secret');
const dblink='mongodb+srv://'+mongodbID+'/?retryWrites=true&w=majority'
mongoose.connect(dblink).then(function (db)
{
    console.log('db connected');
}).catch( function (err)
{
    console.log(err);
})

const transactionSchema=mongoose.Schema(
{
    id:
    {
        type:String,
        required:true,

    },
   title:
   {
    type:String,
    required:true
   },
   amount:{
    type:String,
    required:true,
   },
   date:
   {
    type:String,
    required:true,
   }

});
const transactionModel=mongoose.model('transactionModel',transactionSchema);
module.exports=transactionModel;