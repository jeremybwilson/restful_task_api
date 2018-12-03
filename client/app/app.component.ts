import { Component, OnInit } from '@angular/core';

import { AuthService } from './services';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Task List API';
    loggedIn: boolean;

    constructor(private readonly authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn$
      .subscribe(loggedIn => {
        this.loggedIn = loggedIn;
      });
  }
}
