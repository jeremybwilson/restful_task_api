import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import * as fromTasks from './tasks';
import * as fromServices from './services';
import { NavComponent } from './nav/nav.component';

import { TaskResolve } from './resolvers';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ...fromTasks.components,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...fromServices.services,
    TaskResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
