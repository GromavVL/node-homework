const express = require('express');
const {
  getTask,
  getTaskById,
  createTask,
  deleteTaskById,
  updateTaskById,
} = require('./controllers/taskController');
const { validate, errorHadlers } = require('./middleware');
const app = express();

app.use(express.json());

app.get('/task', getTask);
app.get('/task/:id', getTaskById);
app.post('/task', validate.validateTaskOnCreate, createTask);
app.patch('/task/:id', validate.validateTaskOnUpdate, updateTaskById);
app.delete('/task/:id', deleteTaskById);

app.use(errorHadlers.errorHandler, errorHadlers.ValidationErrorHandler);

module.exports = app;
