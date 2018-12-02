// const mongoose = require('mongoose');
const Task = require('mongoose').model('Task');

module.exports = {
    index(request, response) {
      console.log('requesting all tasks');
      Task.find({})
        .then(tasks_db => {
          const tasks = tasks_db;
          // console.log("Success", tasks_db);
          response.json(tasks);
        })
        .catch(error => {
          response.json({message: "Error", error:error});
        })
    },
    show(request, response) {
      console.log('we are in the show route, here is the task_id', request.params.task_id);
      Task.findById(request.params.task_id)
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(error => {
            response.status(500).json({ message: "Error", error: error })
        })
    },
    create(request, response) {
        console.log('we got to creating a task', request.body);
        Task.create(request.body)
        .then( task => {
            console.log('task was created', task);
            response.json(task);
        })
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
    },
    update(request, response) {
        Task.findByIdAndUpdate(request.params._id, request.body, { new: true })
        .then(task =>  response.json(task))
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
    },
    destroy(request, response) {
      console.log('received a request to delete a book id', request.params._id);
      Task.findByIdAndDelete(request.params._id)
        .then(task => {
          console.log('successfully deleted a task');
          response.json(task)
        })
        .catch(error => {
          console.log(`something went wrong with the delete request`);
          response.json({message: "Error", error: error});
        });
    }
}
