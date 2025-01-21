const express = require('express');
const { authmiddleware } = require('../middlewares/middleware');
const { Account, User } = require('../db/db');
const { default: mongoose } = require('mongoose');


const router = express.Router();

router.get("/balance", authmiddleware, async (req,res)=>{
   const account = await Account.findOne({
        userId: req.userId
   })
   res.json({
    balance: account.balance
   })
})

router.post("/transfer",authmiddleware, async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();  
    
    const amount = req.body.amount
    const sendTo = req.body.to

    const account = await Account.findOne({
        userId: req.userId
    }).session(session)

    if(account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Not enough balance"
        })
    }
    
    const receivingAccount = await Account.findOne({
        userId: sendTo
    }).session(session)

    if(!receivingAccount){
        await session.abortTransaction(); 
        return res.json({
            msg: "Account not found"
        })
    }

    await Account.updateOne({
        userId: req.userId
    },{
        $inc: {
            balance: -amount
        }
    }).session(session)
    
    await Account.updateOne({
        userId: sendTo
    },{
        $inc: {
            balance: amount
        }
    }).session(session)

    await session.commitTransaction();

    res.json({
        msg: "Transaction successful"
    })
})

module.exports = router;
