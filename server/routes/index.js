const task_router = require('./task.routes');
const router = require('express').Router();

module.exports = router
  .use('/tasks', task_router);
//   .use('/authors', author_router);
