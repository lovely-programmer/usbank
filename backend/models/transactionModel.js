import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    transaction_type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timeStamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
