import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task } from '../../models';
import { TaskService, MessageService } from '../../services';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css', '../tasks.css']
})
export class TaskEditComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  updateTask = new EventEmitter<Task>();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  onEvent(event: Event): void {
    console.log(`eventing`);
    event.stopPropagation();
  }

  getTask(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        this.taskService.getTask(id)
          .subscribe(task => this.task = task);
      });
  }

  editTask(task: Task): void {
    console.log(`got a request to update a task`, task);
    this.taskService.updateTask(task)
      .subscribe(data => {
        this.messageService.clear();
        this.router.navigateByUrl('tasks');
        console.log(`updateTask() subscription got edited task`, data);
      }, error => {
        this.messageService.add(error.error);
        console.log('updateTask() at task-edit.component.ts received error from DB: ', error);
      }
      );
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.task);
    console.log('form submitted', form.value);
    this.updateTask.emit(form.value);  // can either do form.value or this.task
    form.reset();
    console.log('new task created', form.value);
    this.router.navigateByUrl('/');
  }

}
