import { log } from "console";
import expres, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user-routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = expres();

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
