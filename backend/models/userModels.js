import mongoose from "mongoose";

let account_number = Math.floor(Math.random() * 9000000000) + 1000000000;

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a name"] },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: { type: String, required: [true, "Please add a password"] },
    phoneNumber: { type: String, required: [true, "Please add a phoneNumber"] },
    address: { type: String, required: [true, "Please add a valid address"] },
    account_number: { type: Number, default: account_number },
    account_type: {
      type: String,
      required: [true, "Please add a valid account type"],
    },
    balance: { type: Number, default: 0 },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
