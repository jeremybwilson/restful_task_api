const task_router = require('./task.routes');
const auth_router = require('./auth.routes');
const router = require('express').Router();

module.exports = router
  .use('/tasks', task_router)
  .use('/auth', auth_router);
