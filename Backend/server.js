const express = require("express");
const colors = require("colors");
const cors = require("cors");
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

// CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, X-Requested-With');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});
// here we will setup the routes
app.use("/api/products", require("./routes/api/products"));
app.use("/api/users", require("./routes/api/users"));
// here we will setup the login route
app.use("/api/users/login", require("./routes/api/login"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
