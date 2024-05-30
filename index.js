const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todos");

// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// Connect to Database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE baby </h1>`);
});
