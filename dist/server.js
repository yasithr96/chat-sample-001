"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
//module imports
const app = (0, express_1.default)();
const cors = require("cors");
require("dotenv").config();
//middleware functions
app.use(express_1.default.json());
app.use(cors());
//routes
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const messageRoutes = require("./routes/message");
//use routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.get("/", (req, res) => {
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
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("MongoDB connection established");
})
    .catch((err) => {
    console.log("MongoDB connection failed : " + err.messsage);
});
//# sourceMappingURL=server.js.map