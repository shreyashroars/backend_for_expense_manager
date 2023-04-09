const transactionModel = require("../models/txModel");

module.exports.posttx=async function posttx(req,res)
{
    try {
        let tx=req.body;
    let data= await transactionModel.create(tx);
    if(data)
    {
        res.json({message:"Transaction created",data:tx});
    }
    else
    {
        res.json({message:"No transaction created"});
    }
        
    } catch (error) {
        res.json({message:error.message});
        
    }
    

}
module.exports.getAlltx=async function getAlltx(req,res)
{
    try {
    let tx= await transactionModel.find();
    if(tx)
    {
        res.status(200).json(tx);

    }
    else{
        res.status(400).json({message:"No transaction"});
    }
        
    } catch (error) {
        res.json({message:error.message})
        
    }
    
    
}
