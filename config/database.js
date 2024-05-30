// This whole code ensures the dbconnection with server

const mongoose = require("mongoose");

// things defined in .env file will pe loaded inside the process.env
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is successfull"))
    .catch((error) => {
      console.log("Issue in connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
