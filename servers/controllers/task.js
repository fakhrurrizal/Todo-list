const Task = require("../models/task");
const Category = require("../models/category");

const createTask = async (req, res) => {
  try {
    const { title, category_id } = req.body;
    const userId = req.user.userid._id;

    const tasks = new Task({
      title: title,
      is_done: false,
      category_id,
      user_id: userId,
    });

    const task = await tasks.save();
    res.status(200).json({
      message: "Create Task Successfully",
      task,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const userId = req.user.userid._id;
    const username = req.user.username;
    const tasks = await Task.find({ userId });
    if (!tasks) {
      res.status(500).json({
        success: false,
        message: "tasks Not Found",
      });
    }
    res.status(200).json({
      message: "tasks fetching successfully",
      tasks,
      username,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getTasksByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.find({ category_id: id });
    if (tasks === []) {
      res.status(500).json({
        success: false,
        message: "tasks Not Found",
      });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
  
    const tasks = await Task.findById(id);
    if (!tasks) {
      res.status(200).json({
        success: false,
        message: "tasks not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Tasks fetching successfully",
        tasks,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteTask = async ( req, res ) => {
  try {
      const { id } = req.params
      const task = await Task.findByIdAndDelete(id)
      if (!task) {
          res.status(500).json({
              success: false,
              message: 'task deletion failed, Data Not found'
          })
      } else {
          res.status(200).json({
              success: true,
              message: 'task deleted successfully',
              task
          })
      }
  } catch (error) {
      throw new Error(error.message || 'Error')
  }
}

const editTask = async ( req, res ) => {
  try {
      const { id } = req.params
      const { title, category_id } = req.body
    
      // Category: check if Category is present in DB
      const tasks = await Task.findByIdAndUpdate( {_id : id}, {
          title: title,
          category_id : category_id
      })
      if (!tasks) {
          res.status(500).json({
              success: false,
              message: 'categories updation failed'
          })
      }
      res.status(200).json({
          success: true,
          message: 'categories updated successfully',
      })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = { createTask, getTask, getTasksByCategory, getTaskById, deleteTask, editTask };
