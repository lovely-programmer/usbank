import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("api/users/", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
