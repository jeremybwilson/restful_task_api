const TaskController = require('../controllers/task.controller');
const router = require('express').Router();

module.exports = router
  //routes and controllers

  // show all tasks route
  .get('/', TaskController.index)

  // create task route
  .post('/', TaskController.create)

  // show a task route
  .get('/:task_id', TaskController.show)

  // update a task route
  .put('/:_id', TaskController.update)

  // delete user route
  .delete('/:_id', TaskController.destroy)
