const Task = require('../models/toDo');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};

exports.getById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.addNewTask = async (req, res) => {
    try {
        const { title, description, dueDate, completed } = req.body;
        const newTask = await Task.create({
            title,
            description,
            dueDate,
            completed
        });
        console.log("New item added successfully!");
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};