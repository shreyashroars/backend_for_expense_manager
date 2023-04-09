const express =require('express');
const app = express();
const txRouter = require('./Routers/txRouter');
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json()); 
app.listen(3000);
app.use('/transaction',txRouter);

