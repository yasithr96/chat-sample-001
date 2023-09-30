import mongoose, { ConnectOptions } from "mongoose";
import express, { Request, Response } from "express";

//module imports
const app = express();
const cors = require("cors");

require("dotenv").config();

//middleware functions
app.use(express.json());
app.use(cors());

//routes
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const messageRoutes = require("./routes/message");

//use routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the world of hereos and villains..");
});

//port declaration
const port = process.env.PORT || 5000;

//connection string from env
const uri = process.env.MONGOOSE_URI;

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});

//mongo db connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.log("MongoDB connection failed : " + err.messsage);
  });
