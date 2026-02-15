const {
  CREATE_TASK_VALIDATION_SHEMAS,
  UPDATE_TASK_VALIDATION_SHEMAS,
} = require('../utils/validationShemas');

module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await CREATE_TASK_VALIDATION_SHEMAS.validate(body);
    req.body = validateTask;
    console.log('req.body:>> ', req.body);
    console.log('validateTask :>> ', validateTask);
  } catch (e) {
    next(e);
  }
  next();
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateTask = await UPDATE_TASK_VALIDATION_SHEMAS.validate(body);
    req.body = validateTask;
  } catch (e) {
    next(e);
  }
  next();
};
