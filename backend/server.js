import express from "express";
import {} from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

//dotenv config
dotenv.config();

//mongoDB Connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRouter);

//port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at ${port}`.bgBlue);
});
