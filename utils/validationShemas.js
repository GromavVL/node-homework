const yup = require('yup');

const VALIDATE_TASK = yup.string().min(2).max(64);
const VALIDATE_DESCRIPTION = yup.string().min(2).max(64);

module.exports.CREATE_TASK_VALIDATION_SHEMAS = yup.object({
  firstTask: VALIDATE_TASK.required(),
  description: VALIDATE_DESCRIPTION.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SHEMAS = yup.object({
  firstTask: VALIDATE_TASK,
  description: VALIDATE_DESCRIPTION,
  completed: yup.boolean(),
});
