const express = require("express");
const router = express.Router();

// Import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodoById } = require("../controllers/getTodoById");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// Define API routes
// Mapped the path with with controller
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodosById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;
