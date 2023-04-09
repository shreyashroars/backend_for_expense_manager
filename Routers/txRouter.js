const express=require('express');
const { posttx, getAlltx,deltx} = require('../controller/txcontroller');
const txRouter = express.Router();

txRouter.route('/gettx')
.get(getAlltx);
txRouter.route('/posttx')
.post(posttx)
txRouter.route('/:id').
delete(deltx)
module.exports=txRouter;