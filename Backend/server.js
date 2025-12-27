const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleWare");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT;
// Connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// here we will setup the routes
app.use("/api/products", require("./routes/api/products"));
app.use("/api/users", require("./routes/api/users"));
// here we will setup the login route
app.use("/api/users/login", require("./routes/api/login"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
