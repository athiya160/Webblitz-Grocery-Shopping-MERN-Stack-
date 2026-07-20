// 1. ADD THIS LINE AT THE VERY TOP to read your .env file
require('dotenv').config(); 

const mongoose = require('mongoose');
const chalk = require('chalk');
const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

// Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// Cookies Parser
app.use(cookieParser());

// 2. THIS IS THE BIG CHANGE! 
// We replaced the local link with process.env.MONGO_URI
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'Grocery', // Explicitly specify the database name
}).then(() => {
    console.log(chalk.blue('Database Connected to MongoDB Atlas!'));
}).catch((err) => {
    console.log(chalk.red('Database Not Connected: ' + err));
});

// JSON Middleware
app.use(express.json());

// Use Express File Upload
app.use(expressFileUpload());

// Configure Cloudinary
cloudinary.config({
    cloud_name: "dymmundgz",
    api_key: "866466422115728",
    api_secret: "_sgWOU6iVZZF4WIoEjGJ12Xi6Ak",
});

// Load Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

// Access Frontend Static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Start the Server
app.listen(port, () => {
    console.log(chalk.yellow(`Server running at http://localhost:${port}/`));
});