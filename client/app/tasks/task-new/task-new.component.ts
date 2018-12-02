import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css', '../tasks.css']
})
export class TaskNewComponent implements OnInit {

  task = new Task();

  @Output()
  createTask = new EventEmitter<Task>();

  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('form submitted', this.task);
    this.taskService.createTask(this.task)
      .subscribe(newTask => {
        this.createTask.emit(this.task);
        this.task = new Task();
        form.reset();
        console.log('new task created', newTask);
        this.router.navigateByUrl('/');
      });
  }

}
