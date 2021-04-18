import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],

})
export class BookComponent implements OnInit {
  @Input() book: any;
  @HostBinding('class.active') activeStyle = false;

  constructor() {}
  public showMoreInfo = false;
  public infoButtonText = 'More Info';
  onMoreInfoToggle(): void {
    this.showMoreInfo = !this.showMoreInfo;
    this.infoButtonText = !this.showMoreInfo ? 'More Info' : 'Less Info';
    this.activeStyle = !this.activeStyle;
  }
  ngOnInit(): void {}
}
