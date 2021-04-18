import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../Book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
})
export class BookshelfComponent implements OnInit {
  @Input() books: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Book[]>('http://localhost:3000').subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
