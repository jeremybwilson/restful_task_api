// const mongoose = require('mongoose');
const Task = require('mongoose').model('Task');

module.exports = {
    index(request, response) {
        Task.find({})
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json({ message: "Success", tasks });
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    show(request, response) {
        Task.findOne({ task: request.params.task })
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json({ message: "Success", tasks });
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
        Task.findByIdAndUpdate({task: request.params.task})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({ message: "Error", error: error });
        })
    },
    destroy(request, response) {
        Task.deleteOne({task: request.params.task})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({message: "Error", error: error});
        })
    }
}