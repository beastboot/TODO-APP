// Import the model
const Todo = require("../models/Todo");

// Async function is used here for better and simultaneous execution of rest of the function so that they cann't wait for execution and our main thread doesn't get blocked and wait for the execution

// Define route handler
exports.createTodo = async (req, res) => {
  try {
    // Extract the title and description from request body
    const { title, description } = req.body;

    // Create a new Todo Object and insert in DB
    const response = await Todo.create({ title, description });

    // Send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    // error 500 means the internal server error
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
