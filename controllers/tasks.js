const Task = require("../models/Task");

// to get all tasks list
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// to create Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// to get single Task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task with id:${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

// to update single Task
const updateTask = async (req, res) => {
  try {
    // console.log(req.params);
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `no task with id:${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

// to delete single Task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task with id:${taskID}` });
    }
    // res.status(200).json({ task: null, status: "success" });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
