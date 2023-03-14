import expressAsyncHandler from "express-async-handler";
import Transaction from "../models/transactionModel.js";

const createTransaction = expressAsyncHandler(async (req, res) => {
  const { amount, remark, transaction_type } = req.body;

  await Transaction.create({
    amount,
    remark,
    transaction_type,
    user: req.user.id,
  });

  res.send(200).json("Transaction Successful");
});

const getTransactions = expressAsyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user.id });

  res.status(200).json(transactions);
});

export { createTransaction, getTransactions };
