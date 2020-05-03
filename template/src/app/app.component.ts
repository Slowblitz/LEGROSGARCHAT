import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-admin-angular';
  username = localStorage.getItem('username');

  login() {
    this.username = $('.login-input').val();
    localStorage.setItem('username', this.username);
  }
}
