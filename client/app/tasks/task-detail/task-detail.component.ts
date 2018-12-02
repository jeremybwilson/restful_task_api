import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { TaskService } from '../../services';
import { Task } from '../../models';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css', '../tasks.css']
})
export class TaskDetailComponent implements OnInit {

  @Input()
  task: Task;

  errorMessage: string;

  constructor(
    private router: Router,
    private readonly route: ActivatedRoute,
    private readonly taskService: TaskService
  ) { }

  ngOnInit() {

    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.taskService.getTask(id)
    //     .subscribe(task => (this.task = task));
    // });

    // this.route.paramMap.pipe(
    //   map(params => params.get('id')),
    //   switchMap(id => this.taskService.getTask(id))
    // ).subscribe(task => (this.task = task));

    // this.route.paramMap
    //   .switchMap(params => this.taskService.getTask(params.get('id')))
    //     .subscribe(
    //       task => (this.task = task),
    //       () => {
    //         this.errorMessage = 'Task not found!';

    //         setTimeout(() => {
    //           this.router.navigate(['/tasks']);
    //         }, 2000);
    //       }
    //     );

    this.task = this.route.snapshot.data.task as Task;
  }

}
