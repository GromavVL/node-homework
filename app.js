const express = require('express');
const {
  getTask,
  getTaskById,
  createTask,
  deleteTaskById,
  updateTaskById,
} = require('./controllers/taskController');
const app = express();

app.get('/task', getTask);
app.get('/task/:id', getTaskById);
app.post('/task', createTask);
app.patch('/task/:id', updateTaskById);
app.delete('/task/:id', deleteTaskById);

module.exports = app;
