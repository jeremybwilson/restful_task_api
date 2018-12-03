import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import * as fromTasks from './tasks';
import * as fromServices from './services';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { MessagesComponent } from './messages/messages.component';

import { AuthService } from './services';
import { AuthGuard } from './auth.guard';
import { TaskResolve } from './resolvers';

@NgModule({
  declarations: [
    AppComponent,
    ...fromTasks.components,
    SearchPipe,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
  ],
  providers: [
    ...fromServices.services,
    AuthService,
    AuthGuard,
    TaskResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
