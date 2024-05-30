// Import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async (req, res) => {
  try {
    // Fetch all todo items from database
    // Await is always used at the time of the connection with database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entry Todo Data is fetched",
    });
  } catch (err) {
    console.err(err);
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
