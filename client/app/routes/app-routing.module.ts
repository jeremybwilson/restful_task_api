import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromTasks from '../tasks';
import { TaskResolve } from '../resolvers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: fromTasks.TaskListComponent,
      },
      {
        path: 'new',
        component: fromTasks.TaskNewComponent,
      },
      {
        path: ':id',
        component: fromTasks.TaskDetailComponent,
        resolve: {
          task: TaskResolve,
        }
      },
      {
        path: ':id/edit',
        component: fromTasks.TaskEditComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
