const express =require('express');
const app = express();
const txRouter = require('./Routers/txRouter');
app.get('/',(req,res)=>
{
    res.send("Main Page");

});
app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json()); 
app.listen(3000);
app.use('/transaction',txRouter);

