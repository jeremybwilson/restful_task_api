import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService, MessageService } from '../../services';
import { Task } from '../../models';

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
    private readonly router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('form submitted', this.task);
    this.taskService.createTask(this.task)
      .subscribe(newTask => {
        this.messageService.clear();
        this.createTask.emit(this.task);
        this.task = new Task();
        form.reset();
        console.log('new task created', newTask);
        this.router.navigateByUrl('/');
      }, error => {
        this.messageService.add(error.error);
        console.log('onSubmit() at task-new.component.ts received an error from the DB: ', error);
      });
  }

}
