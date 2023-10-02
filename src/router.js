const express = require('express');
const appRouter = express.Router();
const toDoControllers = require('./controllers/toDoController');
appRouter.use(express.json());

appRouter.get('/tasks',toDoControllers.getAllTasks);
appRouter.get('/tasks/:id',toDoControllers.getById);
appRouter.post('/newTask',toDoControllers.addNewTask);

module.exports = appRouter;