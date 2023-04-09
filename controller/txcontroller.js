const transactionModel = require("../models/txModel");

// module.exports.gettx=async function gettx(req,res)
// {
//     //console.log(req.query);
//     let id=req.params.id;
//     let User= await userModel.findById(id);
//     if(User)
//     {
//     res.json(User);
//     }
//     else
//     {
//         res.json({message:"User not found"})
//     }

// }
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
module.exports.deltx= async function deltx(req,res)
{
    try
    {
        let id=req.params.id;
        let tx=await transactionModel.findOneAndDelete({id:id});
        if(tx)
        {
            res.json({message:"Transaction deleted successfully",data:tx});
        }
        else
        {
            res.json({message:"Transaction not found"});
        }
        res.json(
            {message:'data deleted successfully',
            data:tx
        }); 

    }catch(error)
    {
        res.json({message:error.message});
    }
}
