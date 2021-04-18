import { Injectable } from '@nestjs/common';
import { Book } from './Book';

@Injectable()
export class AppService {
  getBooks(): Book[] {
    return [
      {
        isbn: '9781593275846',
        title: 'Eloquent JavaScript, Second Edition',
        subtitle: 'A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        published: '2014-12-14T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 472,
        description:
          'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        website: 'http://eloquentjavascript.net/',
      },
      {
        isbn: '9781449365035',
        title: 'Speaking JavaScript',
        subtitle: 'An In-Depth Guide for Programmers',
        author: 'Axel Rauschmayer',
        published: '2014-02-01T00:00:00.000Z',
        publisher: "O'Reilly Media",
        pages: 460,
        description:
          'Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
        website: 'http://speakingjs.com/',
      },
      {
        isbn: '9781593277574',
        title: 'Understanding ECMAScript 6',
        subtitle: 'The Definitive Guide for JavaScript Developers',
        author: 'Nicholas C. Zakas',
        published: '2016-09-03T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 352,
        description:
          'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
        website: 'https://leanpub.com/understandinges6/read',
      },

    ];
  }
}
