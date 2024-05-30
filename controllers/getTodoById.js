const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
  try {
    // Extract Todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data forgiven id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
