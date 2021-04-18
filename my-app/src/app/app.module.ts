import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, BookshelfComponent, BookComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
