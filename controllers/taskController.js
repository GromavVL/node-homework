const { v4: uuidv4 } = require('uuid');
const CreateError = require('http-errors');

const task = [
  {
    id: uuidv4(),
    firstTask: 'Prepare food',
    description: 'Cook dinner for the family',
    completed: false,
  },
  {
    id: uuidv4(),
    firstTask: 'Wash the car',
    description: 'Clean inside and outside',
    completed: false,
  },
  {
    id: uuidv4(),
    firstTask: 'Buy groceries',
    description: 'Milk, bread, eggs, vegetables',
    completed: true,
  },
  {
    id: uuidv4(),
    firstTask: 'Clean the room',
    description: 'Vacuum and dust all surfaces',
    completed: false,
  },
];

module.exports.getTask = (req, res) => {
  res.status(200).send(task);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = task.find(t => t.id === id);

  if (!foundTask) {
    return res.status(404).send('Task id Not Found');
  }
  return res.status(200).send(foundTask);
};

module.exports.createTask = (req, res, next) => {
  const { body } = req;

  task.push({ ...body, id: uuidv4(), completed: false });
  console.log('body :>> ', body);
  // res.status(201).send(task[task.length - 1]);
  next(CreateError(201, task[task.length - 1]));
};

module.exports.deleteTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = task.findIndex(t => t.id === id);
  if (foundTask === -1) {
    return res.status(404).send('Task Not Found');
  }

  task.splice(foundTask, 1);
  // res.status(200).send(`Delete Task by ${id}`);
  next(CreateError(20, `Delete Task by ${id}`));
};

module.exports.updateTaskById = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  const foundTask = task.findIndex(t => t.id === id);
  console.log('foundTask :>> ', foundTask);
  if (foundTask == -1) {
    return res.status(404).send('Task Not Found');
  }

  task[foundTask] = { ...task[foundTask], ...body };
  // res.status(200).send(task[foundTask]);
  next(CreateError(200, task[foundTask]));
};
