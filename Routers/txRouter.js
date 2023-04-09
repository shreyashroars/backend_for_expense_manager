const express=require('express');
const { posttx, getAlltx} = require('../controller/txcontroller');
const txRouter = express.Router();

txRouter.route('/gettx')
.get(getAlltx);
txRouter.route('/posttx')
.post(posttx)

module.exports=txRouter;