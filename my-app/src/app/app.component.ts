import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'my-app';
}
