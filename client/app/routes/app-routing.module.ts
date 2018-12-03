import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromTasks from '../tasks';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth.guard';
import { TaskResolve } from '../resolvers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // redirectTo: 'tasks',
    // pathMatch: 'full'
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
        canActivate: [AuthGuard]
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
